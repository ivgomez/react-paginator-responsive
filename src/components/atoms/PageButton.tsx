import React from 'react';
import styled from 'styled-components';
import { IPageButton } from '../../interfaces';
import { useWindowSize } from '../../libs';

export const PageButton = (props: any) => {
  const {
    pageSeleted,
    currentPage,
    children,
    onClick,
    paginatorButtonColor,
    paginatorButtonHoverColor,
    paginatorButtonSelectedColor,
    paginatorButtonBackgroundColor,
    paginatorButtonSelectedBackgroundColor,
  } = props;
  const { isXs } = useWindowSize();

  return (
    <ButtonWrapper
      isXs={isXs}
      pageSeleted={pageSeleted}
      currentPage={currentPage}
      onClick={() => onClick(pageSeleted)}
      paginatorButtonColor={paginatorButtonColor}
      paginatorButtonHoverColor={paginatorButtonHoverColor}
      paginatorButtonSelectedColor={paginatorButtonSelectedColor}
      paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
      paginatorButtonSelectedBackgroundColor={
        paginatorButtonSelectedBackgroundColor
      }
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<IPageButton>`
  background-color: ${({ paginatorButtonBackgroundColor }) =>
    paginatorButtonBackgroundColor || 'transparent'};
  color: ${({
    pageSeleted,
    currentPage,
    paginatorButtonColor,
    paginatorButtonSelectedColor,
  }) =>
    currentPage === pageSeleted
      ? paginatorButtonSelectedColor
      : paginatorButtonColor} !important;
  background-color: ${({
    pageSeleted,
    currentPage,
    paginatorButtonSelectedBackgroundColor,
  }) =>
    currentPage === pageSeleted &&
    (paginatorButtonSelectedBackgroundColor || '#69C8B7')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: ${({ isXs }) => (isXs ? '5px 10px' : '10px 15px')};
  font-weight: bold;
  vertical-align: text-top;
  :hover {
    background-color: ${({
      pageSeleted,
      currentPage,
      paginatorButtonHoverColor,
    }) =>
      pageSeleted !== currentPage && (paginatorButtonHoverColor || '#effffb')};
  }
  :active {
    outline: none;
    border: none;
  }
`;
