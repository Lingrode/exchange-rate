import { RootState } from "../store";

export const selectBaseCurrency = (state: RootState) =>
  state.currency.baseCurrency;
export const selectExchangeInfo = (state: RootState) =>
  state.currency.exchangeInfo;
export const selectIsLoading = (state: RootState) => state.currency.isLoading;
export const selectIsError = (state: RootState) => state.currency.isError;
