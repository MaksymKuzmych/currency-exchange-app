export interface IRates {
  [currency: string]: number;
}

export interface IFixerSuccessResponse {
  success: true;
  timestamp: number;
  base: string;
  date: string;
  rates: IRates;
}

export interface IFixerErrorResponse {
  success: false;
  error: {
    code: number;
    type?: string;
    info?: string;
  };
}

export type FixerRatesResponse = IFixerSuccessResponse | IFixerErrorResponse;
