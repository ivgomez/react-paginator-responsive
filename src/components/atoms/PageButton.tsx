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
  background-color: ${({ pageSeleted, currentPage}) => currentPage === pageSeleted && '#69C8B7'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  font-weight: bold;
  vertical-align: text-top;
  :hover {
    background-color: ${({ pageSeleted, currentPage, paginatorButtonHoverColor }) =>
      pageSeleted !== currentPage && (paginatorButtonHoverColor || '#effffb')};
  }
`;
