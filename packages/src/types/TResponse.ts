export type TErrorMessage = string | string[];

type TErrorResponse = {
  isError: true;
  errorMessage: TErrorMessage;
};

type TDataResponse<Data> = {
  isError: false;
  data: Data;
};

export type TResponse<Data> = TErrorResponse | TDataResponse<Data>;
