import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getBaseCurrency,
  getExchange,
  getLatestRates,
} from "@/redux/currency/operations";
import { CurrencyState } from "@/redux/currency/types";

const initialState: CurrencyState = {
  baseCurrency: "",
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
};

const handlePendind = (state: Pick<CurrencyState, "isLoading">) => {
  state.isLoading = true;
};

const handleRejected = (
  state: Pick<CurrencyState, "isError" | "isLoading">,
  action: PayloadAction<string | undefined>
) => {
  state.isError = action.payload;
  state.isLoading = false;
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setDefaultCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(getExchange.pending, handlePendind)
      .addCase(getExchange.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(getExchange.rejected, handleRejected)
      .addCase(getLatestRates.pending, handlePendind)
      .addCase(getLatestRates.fulfilled, (state, action) => {
        state.rates = Object.entries(action.payload);
        state.isLoading = false;
      })
      .addCase(getLatestRates.rejected, handleRejected);
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export default currencySlice.reducer;
