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
    page,
    pageGroupSize,
    pageSize,
    items,
    totalItems,
    callback,
    styles,
  } = props;
  const {
    hideBackNextButtonText,
    paginatorButtonColor,
    paginatorButtonHoverColor,
    paginatorButtonSelectedColor,
    backAndNextTextButtonColor,
    paginatorButtonBackgroundColor,
    lateralMargin,
  } = styles;

  const { isMobile } = useWindowSize();
  const [upperPageGroupSize, setUpperPageGroupSize] = useState(pageGroupSize);
  const [lowerPageGroupSize, setlowerPageGroupSize] = useState(0);
  const [currentPage, setcurrentPage] = useState(page);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(true);

  const totalPage: number | string = Math.ceil(totalItems / pageSize);
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const groupsFromTotalPage = Math.ceil(totalPage / pageGroupSize);

  const setPrevAndNextBtnClass = (pageNumber: number) => {
    setIsNextButtonEnabled(true);
    setIsBackButtonEnabled(true);
    if (pageNumber !== currentPage) {
      callback(pageNumber);
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
    setUpperPageGroupSize(pageGroupSize);
    setlowerPageGroupSize(0);
    setcurrentPage(firstPage);
    setPrevAndNextBtnClass(firstPage);
  };

  const btnPrevClick = () => {
    if ((currentPage - 1) % pageGroupSize === 0) {
      setUpperPageGroupSize(upperPageGroupSize - pageGroupSize);
      setlowerPageGroupSize(lowerPageGroupSize - pageGroupSize);
    }
    const pageNumber = currentPage - 1;
    setcurrentPage(pageNumber);
    setPrevAndNextBtnClass(pageNumber);
  };

  const btnNextClick = () => {
    const pageNumber = currentPage + 1;
    if (currentPage + 1 > upperPageGroupSize) {
      setUpperPageGroupSize(upperPageGroupSize + pageGroupSize);
      setlowerPageGroupSize(lowerPageGroupSize + pageGroupSize);
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
          hideBackNextButtonText={hideBackNextButtonText}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          backAndNextTextButtonColor={backAndNextTextButtonColor}
        >
          <NavigateBefore size="28" />
        </PreviousButton>
        <PageButtonContainer>
          <DecrementControl
            firstPage={firstPage}
            lastPage={lastPage}
            currentPage={currentPage}
            pageGroupSize={pageGroupSize}
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
          />
          <IncrementControl
            currentPage={currentPage}
            lastPage={lastPage}
            pageNumbers={pageNumbers}
            totalPage={totalPage}
            pageGroupSize={pageGroupSize}
            upperPageGroupSize={upperPageGroupSize}
            lowerPageGroupSize={lowerPageGroupSize}
            groupsFromTotalPage={groupsFromTotalPage}
            setUpperPageGroupSize={setUpperPageGroupSize}
            setlowerPageGroupSize={setlowerPageGroupSize}
            setcurrentPage={setcurrentPage}
            setPrevAndNextBtnClass={setPrevAndNextBtnClass}
            paginatorButtonColor={paginatorButtonColor}
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
          paginatorButtonColor={paginatorButtonColor}
          hideBackNextButtonText={hideBackNextButtonText}
          paginatorButtonHoverColor={paginatorButtonHoverColor}
          backAndNextTextButtonColor={backAndNextTextButtonColor}
        >
          <NavigateNext size="28" />
        </NextButton>
      </PaginatorControlsWrapper>
      {!isMobile && <PaginatorInfo>{paginatorDisplayInfo()}</PaginatorInfo>}
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
    margin: ${({ lateralMargin }: any) => lateralMargin || '0 2rem'};
    
  `}
`;

const PaginatorControlsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageButtonContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const PaginatorInfo = styled.span`
  color: rgba(140, 140, 140, 0.99);
  font-size: 12px;
  letter-spacing: 0.3px;
  line-height: 18px;
`;

const PreviousButton = styled(PrevAndNextButton)``;
const NextButton = styled(PrevAndNextButton)``;
