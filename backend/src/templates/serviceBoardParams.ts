export type serviceBoardOptions = {
  numRows?: string | number;
  crs: string;
  filterCrs?: string;
  filterType?: "to" | "from";
  timeOffset?: number;
  timeWindow?: number;
};

export const serviceBoardParams =
  `<ldb:numRows>!!numRows!!</ldb:numRows>` +
  `<ldb:crs>!!crs!!</ldb:crs>` +
  `<ldb:filterCrs>!!filterCrs!!</ldb:filterCrs>` +
  `<ldb:filterType>!!filterType!!</ldb:filterType>` +
  `<ldb:timeOffset>!!timeOffset!!</ldb:timeOffset>` +
  `<ldb:timeWindow>!!timeWindow!!</ldb:timeWindow>`;
