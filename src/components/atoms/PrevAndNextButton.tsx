import React from 'react';
import styled from 'styled-components';
import { IPaginatorInterface } from '../../interfaces';
import { useWindowSize } from '../../libs';

interface IPrevAndNextButton extends IPaginatorInterface {
  label?: string;
  isNext?: boolean;
  disabled?: boolean;
  children?: any;
  onClick?(): void;
}

export const PrevAndNextButton = (props: IPrevAndNextButton) => {
  const {
    children,
    onClick,
    label,
    isNext,
    disabled,
    disabledColor,
    hideBackNextButtonText,
    paginatorButtonHoverColor,
    backAndNextTextButtonColor,
  } = props;
  const { isXs } = useWindowSize();
  return isNext ? (
    <Button
      onClick={onClick}
      disabled={disabled}
      paginatorButtonHoverColor={paginatorButtonHoverColor}
    >
      {!hideBackNextButtonText && !isXs && (
        <ButtonText
          isNext={isNext}
          disabled={disabled}
          disabledColor={disabledColor}
          backAndNextTextButtonColor={backAndNextTextButtonColor}
        >
          {label}
        </ButtonText>
      )}
      {children}
    </Button>
  ) : (
    <Button
      onClick={onClick}
      disabled={disabled}
      paginatorButtonHoverColor={paginatorButtonHoverColor}
    >
      {children}
      {!hideBackNextButtonText && !isXs && (
        <ButtonText
          disabled={disabled}
          disabledColor={disabledColor}
          backAndNextTextButtonColor={backAndNextTextButtonColor}
        >
          {label}
        </ButtonText>
      )}
    </Button>
  );
};

const Button = styled.button<IPrevAndNextButton>`
  display: inline-block;
  height: -webkit-fill-available;
  background-color: inherit;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  :disabled {
    background-color: transparent !important;
    cursor: default;
  }
  :hover {
    background-color: ${({ paginatorButtonHoverColor }) =>
      paginatorButtonHoverColor || '#effffb'};
  }
`;

const ButtonText = styled.span<IPrevAndNextButton>`
  color: ${({ disabled, backAndNextTextButtonColor, disabledColor }) =>
    disabled ? `${disabledColor || '#dddddd'}` : backAndNextTextButtonColor};
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 12px;
  ${({ isNext }) => (isNext ? 'padding-left: 15px' : 'padding-right: 15px')};
`;
