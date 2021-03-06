export interface BasicPageParams {
  current: number;
  pageSize: number;
}

export interface BasicFetchResult<T extends any> {
  items: T[];
  total: number;
}
