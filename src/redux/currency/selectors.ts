import { RootState } from "../store";

export const selectBaseCurrency = (state: RootState) =>
  state.currency.baseCurrency;
