type options = {
  crs?: string;
  numRows?: string | number;
};

const defaultOptions: options = {
  numRows: 2,
};

export function requestBuilder(
  template: string,
  token: string,
  options: options
) {
  throw Error("Not Implemented Yet");
  //TODO
  //Check params in xml template e.g. %%NUMROWS%% and replace with value in options or default val if not in options
}
