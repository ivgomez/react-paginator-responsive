import React from 'react';
import styled from 'styled-components';
import { PageButton } from '../atoms';
import { IIncrementDecrement } from '../../interfaces';

export const DecrementControl = ({
  firstPage,
  btnGoToFirstElement,
  lastPage,
  currentPage,
  pageGroup = 0,
  upperPageGroupSize,
  lowerPageGroupSize,
  setUpperPageGroupSize,
  setlowerPageGroupSize,
  setcurrentPage,
  setPrevAndNextBtnClass,
  paginatorButtonColor,
  paginatorButtonHoverColor,
  paginatorButtonSelectedColor,
  paginatorButtonBackgroundColor,
}: IIncrementDecrement) => {
  const btnDecrementClick = () => {
    const previousPageNumber = upperPageGroupSize - pageGroup;
    setUpperPageGroupSize(upperPageGroupSize - pageGroup);
    setlowerPageGroupSize(lowerPageGroupSize - pageGroup);
    setcurrentPage(previousPageNumber);
    setPrevAndNextBtnClass(previousPageNumber);
  };

  return lowerPageGroupSize >= 1 ? (
    <>
      <PaginatorItem>
        <FirstPageButton
          pageSeleted={firstPage}
          currentPage={currentPage}
          onClick={btnGoToFirstElement}
          paginatorButtonColor={paginatorButtonColor}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          paginatorButtonSelectedColor={paginatorButtonSelectedColor}
          paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
        >
          {firstPage}
        </FirstPageButton>
      </PaginatorItem>
      <PaginatorItem>
        <DecrementButton
          pageSeleted={lastPage}
          onClick={btnDecrementClick}
          paginatorButtonColor={paginatorButtonColor}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          paginatorButtonSelectedColor={paginatorButtonSelectedColor}
          paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
        >
          {' '}
          &hellip;{' '}
        </DecrementButton>
      </PaginatorItem>
    </>
  ) : null;
};

const PaginatorItem = styled.li`
  display: inline-block;
  margin: 0 5px;
`;

const DecrementButton = styled(PageButton)``;
const FirstPageButton = styled(PageButton)``;
