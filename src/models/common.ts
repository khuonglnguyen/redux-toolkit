export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListRespone<T> {
  data: T[];
  pagination: PaginationParams;
}
