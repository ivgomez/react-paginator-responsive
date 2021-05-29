import React from 'react';
import styled from 'styled-components';
import { IPageButton } from '../../interfaces';

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
  } = props;

  return (
    <ButtonWrapper
      pageSeleted={pageSeleted}
      currentPage={currentPage}
      onClick={() => onClick(pageSeleted)}
      paginatorButtonColor={paginatorButtonColor}
      paginatorButtonHoverColor={paginatorButtonHoverColor}
      paginatorButtonSelectedColor={paginatorButtonSelectedColor}
      paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<IPageButton>`
  background-color: ${({ paginatorButtonBackgroundColor }) =>
    paginatorButtonBackgroundColor || 'grey'};
  color: ${({
    pageSeleted,
    currentPage,
    paginatorButtonColor,
    paginatorButtonSelectedColor,
  }) =>
    currentPage === pageSeleted
      ? paginatorButtonSelectedColor
      : paginatorButtonColor} !important;
  border: none;
  cursor: pointer;
  vertical-align: text-top;
  :hover {
    background-color: ${({ paginatorButtonHoverColor }) =>
      paginatorButtonHoverColor || 'grey'};
  }
`;
