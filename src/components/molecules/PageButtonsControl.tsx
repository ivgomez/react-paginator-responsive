import React from 'react';
import styled from 'styled-components';
import { IIncrementDecrement } from '../../interfaces';
import { PageButton } from '../atoms';
import { useWindowSize } from '../../libs';

export const PageButtonsControl = ({
  pageNumbers = [],
  currentPage,
  upperPageGroupSize,
  lowerPageGroupSize,
  setcurrentPage,
  setPrevAndNextBtnClass,
  paginatorButtonColor,
  paginatorButtonHoverColor,
  paginatorButtonSelectedColor,
  paginatorButtonBackgroundColor,
  paginatorButtonSelectedBackgroundColor,
}: IIncrementDecrement) => {
  const { isXs } = useWindowSize();

  const handleClick = (pageSeleted: number) => {
    setcurrentPage(pageSeleted);
    setPrevAndNextBtnClass(pageSeleted);
  };

  return (
    <>
      {pageNumbers.map((number: number) =>
        number === 1 && currentPage === 1 ? (
          <PaginatorItem key={number} isXs={isXs}>
            <PageButton
              pageSeleted={number}
              currentPage={currentPage}
              onClick={handleClick}
              paginatorButtonColor={paginatorButtonColor}
              paginatorButtonHoverColor={paginatorButtonHoverColor}
              paginatorButtonSelectedColor={paginatorButtonSelectedColor}
              paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
              paginatorButtonSelectedBackgroundColor={
                paginatorButtonSelectedBackgroundColor
              }
            >
              {number}
            </PageButton>
          </PaginatorItem>
        ) : (
          number < upperPageGroupSize + 1 &&
          number > lowerPageGroupSize && (
            <PaginatorItem key={number} isXs={isXs}>
              <PageButton
                pageSeleted={number}
                currentPage={currentPage}
                onClick={handleClick}
                paginatorButtonColor={paginatorButtonColor}
                paginatorButtonHoverColor={paginatorButtonHoverColor}
                paginatorButtonSelectedColor={paginatorButtonSelectedColor}
                paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
                paginatorButtonSelectedBackgroundColor={
                  paginatorButtonSelectedBackgroundColor
                }
              >
                {number}
              </PageButton>
            </PaginatorItem>
          )
        )
      )}
    </>
  );
};

const PaginatorItem = styled.li<any>`
  display: inline-block;
  margin: ${({ isXs }) => (isXs ? '0 2.5px' : '0 5px')};
`;
