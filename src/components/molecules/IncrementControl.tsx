import React from 'react';
import styled from 'styled-components';
import { PageButton } from '../atoms';
import { IIncrementDecrement } from '../../interfaces';
import { useWindowSize } from '../../libs';

export const IncrementControl = ({
  lastPage,
  currentPage,
  pageNumbers = [],
  totalPage = 0,
  pageGroup = 0,
  upperPageGroupSize,
  lowerPageGroupSize,
  groupsFromTotalPage = 0,
  setUpperPageGroupSize,
  setlowerPageGroupSize,
  setcurrentPage,
  setPrevAndNextBtnClass,
  paginatorButtonColor,
  paginatorButtonHoverColor,
  paginatorButtonSelectedColor,
  paginatorButtonBackgroundColor,
}: IIncrementDecrement) => {
  const { isXs } = useWindowSize();

  const btnGoToLastElement = () => {
    const lastElements = totalPage % pageGroup;
    let lastGroupSize;
    if (lastElements === 0 && totalPage > pageGroup) {
      lastGroupSize = totalPage - pageGroup;
    } else {
      lastGroupSize = totalPage - lastElements;
    }
    setUpperPageGroupSize(groupsFromTotalPage * pageGroup);
    setlowerPageGroupSize(lastGroupSize);
    setcurrentPage(lastPage);
    setPrevAndNextBtnClass(lastPage);
  };

  const btnIncrementClick = () => {
    const listId = upperPageGroupSize + 1;
    setUpperPageGroupSize(upperPageGroupSize + pageGroup);
    setlowerPageGroupSize(lowerPageGroupSize + pageGroup);
    setcurrentPage(listId);
    setPrevAndNextBtnClass(listId);
  };

  return pageNumbers.length > upperPageGroupSize ? (
    <>
      <PaginatorItem isXs={isXs}>
        <IncrementButton
          pageSeleted={lastPage}
          currentPage={currentPage}
          onClick={btnIncrementClick}
          paginatorButtonColor={paginatorButtonColor}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          paginatorButtonSelectedColor={paginatorButtonSelectedColor}
          paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
        >
          {' '}
          &hellip;{' '}
        </IncrementButton>
      </PaginatorItem>
      <PaginatorItem isXs={isXs}>
        <LastPageButton
          pageSeleted={lastPage}
          currentPage={currentPage}
          onClick={btnGoToLastElement}
          paginatorButtonColor={paginatorButtonColor}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          paginatorButtonSelectedColor={paginatorButtonSelectedColor}
          paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
        >
          {lastPage}
        </LastPageButton>
      </PaginatorItem>
    </>
  ) : null;
};

const PaginatorItem = styled.li<any>`
  display: inline-block;
  margin: ${({ isXs }) => (isXs ? '0 2.5px' : '0 5px')};
`;

const IncrementButton = styled(PageButton)``;
const LastPageButton = styled(PageButton)``;
