export type serviceBoardOptions = {
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
  `<ldb:filterType>to</ldb:filterType>` +
  `<ldb:timeOffset>!!timeOffset!!</ldb:timeOffset>` +
  `<ldb:timeWindow>!!timeWindow!!</ldb:timeWindow>`;
