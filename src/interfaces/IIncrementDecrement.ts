import { IPageButton } from "./IPageButton";
import { IPaginatorInterface } from "./IPaginatorStyles";

export interface IIncrementDecrement extends IPageButton, IPaginatorInterface {
  firstPage?: number;
  lastPage?: number;
  totalPage?: number;
  pageNumbers?: number[];
  pageGroupSize?: number;
  pageDecrementBtn?: number;
  upperPageGroupSize: number;
  lowerPageGroupSize: number;
  groupsFromTotalPage?: number;
  setcurrentPage: Function;
  btnDecrementClick?: Function;
  btnGoToFirstElement?: Function;
  setUpperPageGroupSize?: any;
  setlowerPageGroupSize?: any;
  setPrevAndNextBtnClass: Function;
}
