import { IPaginatorInterface } from './IPaginatorStyles';

export interface IPaginator {
  page: number;
  pageGroupSize: number;
  pageSize: number;
  items: any[];
  totalItems: number;
  refPoint?: any;
  styles?: IPaginatorInterface;
  callback(pageNumber: number): void;
}
