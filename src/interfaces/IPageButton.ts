import { IPaginatorInterface } from "./IPaginatorStyles";
export interface IPageButton extends IPaginatorInterface {
  pageSeleted?: number;
  currentPage?: number;
}
