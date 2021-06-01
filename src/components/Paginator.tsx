import React, { useState } from 'react';
import styled from 'styled-components';
import { NavigateNext, NavigateBefore } from '@styled-icons/material';
import { breakpoint } from '../libs';
import { IPaginator, IPaginatorInterface } from '../interfaces';
import { getPaginatorInfo } from '../libs';
import { PrevAndNextButton } from './atoms';
import {
  IncrementControl,
  DecrementControl,
  PageButtonsControl,
} from './molecules';
import { useWindowSize } from '../libs';

export const Paginator = (props: IPaginator) => {
  const {
    page = 1,
    items = [],
    pageSize = 10,
    totalItems = 50,
    pageGroupSize = 7,
    callback,
    styles = {},
  } = props;
  const {
    iconColor,
    disabledColor,
    lateralMargin,
    PaginatorInfoColor,
    paginatorButtonColor,
    hideBackNextButtonText,
    paginatorButtonHoverColor,
    backAndNextTextButtonColor,
    paginatorButtonSelectedColor,
    paginatorButtonBackgroundColor,
    paginatorButtonSelectedBackgroundColor,
  } = styles;

  const { isMobile } = useWindowSize();
  const pageGroup = isMobile ? 4 : pageGroupSize;
  const [currentPage, setcurrentPage] = useState(page);
  const [lowerPageGroupSize, setlowerPageGroupSize] = useState(0);
  const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(true);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [upperPageGroupSize, setUpperPageGroupSize] = useState(pageGroup);

  const totalPage: number | string = Math.ceil(totalItems / pageSize);
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const groupsFromTotalPage = Math.ceil(totalPage / pageGroup);

  const setPrevAndNextBtnClass = (pageNumber: number) => {
    setIsNextButtonEnabled(true);
    setIsBackButtonEnabled(true);
    if (pageNumber !== currentPage) {
      if (callback) {
        callback(pageNumber);
      }
    }
    if (totalPage === pageNumber && totalPage > 1) {
      setIsBackButtonEnabled(false);
    } else if (pageNumber === 1 && totalPage > 1) {
      setIsNextButtonEnabled(false);
    } else if (totalPage > 1) {
      setIsNextButtonEnabled(false);
      setIsBackButtonEnabled(false);
    }
  };

  const btnGoToFirstElement = (firstPage: number) => {
    setUpperPageGroupSize(pageGroup);
    setlowerPageGroupSize(0);
    setcurrentPage(firstPage);
    setPrevAndNextBtnClass(firstPage);
  };

  const btnPrevClick = () => {
    if ((currentPage - 1) % pageGroup === 0) {
      setUpperPageGroupSize(upperPageGroupSize - pageGroup);
      setlowerPageGroupSize(lowerPageGroupSize - pageGroup);
    }
    const pageNumber = currentPage - 1;
    setcurrentPage(pageNumber);
    setPrevAndNextBtnClass(pageNumber);
  };

  const btnNextClick = () => {
    const pageNumber = currentPage + 1;
    if (currentPage + 1 > upperPageGroupSize) {
      setUpperPageGroupSize(upperPageGroupSize + pageGroup);
      setlowerPageGroupSize(lowerPageGroupSize + pageGroup);
    }
    setcurrentPage(pageNumber);
    setPrevAndNextBtnClass(pageNumber);
  };

  const paginatorDisplayInfo = () =>
    getPaginatorInfo(pageSize, lastPage, currentPage, items, totalItems);

  return (
    <PaginatorWrapper lateralMargin={lateralMargin}>
      <PaginatorControlsWrapper>
        <PreviousButton
          label="BACK"
          disabled={isBackButtonEnabled}
          onClick={btnPrevClick}
          disabledColor={disabledColor}
          hideBackNextButtonText={hideBackNextButtonText}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          backAndNextTextButtonColor={backAndNextTextButtonColor}
        >
          <NavigateBeforeIcon
            iconColor={iconColor}
            disabledColor={disabledColor}
            disabled={isBackButtonEnabled}
          />
        </PreviousButton>
        <PageButtonContainer>
          <DecrementControl
            firstPage={firstPage}
            lastPage={lastPage}
            currentPage={currentPage}
            pageGroup={pageGroup}
            upperPageGroupSize={upperPageGroupSize}
            lowerPageGroupSize={lowerPageGroupSize}
            setcurrentPage={setcurrentPage}
            btnGoToFirstElement={btnGoToFirstElement}
            setUpperPageGroupSize={setUpperPageGroupSize}
            setlowerPageGroupSize={setlowerPageGroupSize}
            setPrevAndNextBtnClass={setPrevAndNextBtnClass}
            paginatorButtonColor={paginatorButtonColor}
            paginatorButtonHoverColor={paginatorButtonHoverColor}
            paginatorButtonSelectedColor={paginatorButtonSelectedColor}
            paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
          />
          <PageButtonsControl
            pageNumbers={pageNumbers}
            currentPage={currentPage}
            upperPageGroupSize={upperPageGroupSize}
            lowerPageGroupSize={lowerPageGroupSize}
            setcurrentPage={setcurrentPage}
            setPrevAndNextBtnClass={setPrevAndNextBtnClass}
            paginatorButtonColor={paginatorButtonColor}
            paginatorButtonHoverColor={paginatorButtonHoverColor}
            paginatorButtonSelectedColor={paginatorButtonSelectedColor}
            paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
            paginatorButtonSelectedBackgroundColor={
              paginatorButtonSelectedBackgroundColor
            }
          />
          <IncrementControl
            lastPage={lastPage}
            pageNumbers={pageNumbers}
            totalPage={totalPage}
            pageGroup={pageGroup}
            groupsFromTotalPage={groupsFromTotalPage}
            setUpperPageGroupSize={setUpperPageGroupSize}
            setlowerPageGroupSize={setlowerPageGroupSize}
            setcurrentPage={setcurrentPage}
            currentPage={currentPage}
            lowerPageGroupSize={lowerPageGroupSize}
            upperPageGroupSize={upperPageGroupSize}
            paginatorButtonColor={paginatorButtonColor}
            setPrevAndNextBtnClass={setPrevAndNextBtnClass}
            paginatorButtonHoverColor={paginatorButtonHoverColor}
            paginatorButtonSelectedColor={paginatorButtonSelectedColor}
            paginatorButtonBackgroundColor={paginatorButtonBackgroundColor}
          />
        </PageButtonContainer>
        <NextButton
          label="NEXT"
          isNext
          disabled={isNextButtonEnabled}
          onClick={btnNextClick}
          disabledColor={disabledColor}
          paginatorButtonColor={paginatorButtonColor}
          hideBackNextButtonText={hideBackNextButtonText}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          backAndNextTextButtonColor={backAndNextTextButtonColor}
        >
          <NavigateNextIcon
            iconColor={iconColor}
            disabledColor={disabledColor}
            disabled={isNextButtonEnabled}
          />
        </NextButton>
      </PaginatorControlsWrapper>
      {!isMobile && (
        <PaginatorInfo PaginatorInfoColor={PaginatorInfoColor}>
          {paginatorDisplayInfo()}
        </PaginatorInfo>
      )}
    </PaginatorWrapper>
  );
};

const PaginatorWrapper = styled.div<IPaginatorInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${breakpoint.sm<any>`    
    justify-content: space-between;   
    margin: ${({ lateralMargin, isMobile }: any) =>
      isMobile ? '0' : lateralMargin || '0 2rem'};
    
  `}
`;

PaginatorWrapper.displayName = 'PaginatorWrapper';

const PaginatorControlsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageButtonContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const PaginatorInfo = styled.span<IPaginatorInterface>`
  color: ${({ PaginatorInfoColor }) =>
    PaginatorInfoColor || 'rgba(140, 140, 140, 0.99)'};
  font-size: 12px;
  letter-spacing: 0.3px;
  line-height: 18px;
`;

const NavigateNextIcon = styled(NavigateNext)<IPaginatorInterface>`
  heigth: auto;
  width: 28px;
  color: ${({ disabled, disabledColor, iconColor }) =>
    disabled ? disabledColor : iconColor};
`;

const NavigateBeforeIcon = styled(NavigateBefore)<IPaginatorInterface>`
  heigth: auto;
  width: 28px;
  color: ${({ disabled, disabledColor, iconColor }) =>
    disabled ? disabledColor : iconColor};
`;

const PreviousButton = styled(PrevAndNextButton)``;
const NextButton = styled(PrevAndNextButton)``;
