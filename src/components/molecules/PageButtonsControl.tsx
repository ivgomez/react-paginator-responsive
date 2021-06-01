import React from 'react';
import styled from 'styled-components';
import { IIncrementDecrement } from '../../interfaces';
import { PageButton } from '../atoms';

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
  const handleClick = (pageSeleted: number) => {
    setcurrentPage(pageSeleted);
    setPrevAndNextBtnClass(pageSeleted);
  };

  return (
    <>
      {pageNumbers.map((number: number) =>
        number === 1 && currentPage === 1 ? (
          <PaginatorItem key={number}>
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
            <PaginatorItem key={number}>
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

const PaginatorItem = styled.li`
  display: inline-block;
  margin: 0 5px;
`;
