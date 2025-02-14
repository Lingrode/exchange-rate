import { getUserInfo } from "@/service/opencagedataApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { OpenCageCredentials } from "./types";
import { RootState } from "../store";

export const getBaseCurrency = createAsyncThunk<
  string,
  OpenCageCredentials,
  { rejectValue: string; state: RootState }
>("currency/getBaseCurrency", async (crd, thunkAPi) => {
  try {
    const state = thunkAPi.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkAPi.rejectWithValue("We already have base base currency");
    }

    const { results } = await getUserInfo(crd);
    return results[0].annotations.currency.iso_code;
  } catch (error) {
    return thunkAPi.rejectWithValue((error as Error).message);
  }
});
