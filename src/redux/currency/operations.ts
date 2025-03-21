import { getUserInfo } from "@/service/opencagedataApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ExchangeCredentials,
  ExchangeRates,
  ExchangeResult,
  OpenCageCredentials,
} from "@/redux/currency/types";
import { RootState } from "@/redux/store";
import { exchangeCurrency, latestRates } from "@/service/exchangeApi";

export const getBaseCurrency = createAsyncThunk<
  string,
  OpenCageCredentials,
  { rejectValue: string; state: RootState }
>("currency/getBaseCurrency", async (crd, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkApi.rejectWithValue("We already have base base currency");
    }

    const { results } = await getUserInfo(crd);
    return results[0].annotations.currency.iso_code;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const getExchange = createAsyncThunk<
  ExchangeResult,
  ExchangeCredentials,
  { rejectValue: string }
>("currency/getExchange", async (obj, { rejectWithValue }) => {
  try {
    const res = await exchangeCurrency(obj);
    return res;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const getLatestRates = createAsyncThunk<
  ExchangeRates,
  string,
  { rejectValue: string }
>("currency/getLatestRates", async (currency, { rejectWithValue }) => {
  try {
    const res = await latestRates(currency);
    return res;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
