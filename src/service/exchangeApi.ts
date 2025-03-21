import axios from "axios";

import {
  ExchangeCredentials,
  ExchangeRates,
  ExchangeResponse,
  ExchangeResult,
} from "@/redux/currency/types";

const instance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: { apikey: "mGBrT9uomAlvEmOc03PqrEQO4hS0fMxG" },
});

export const exchangeCurrency = async (
  credentials: ExchangeCredentials
): Promise<ExchangeResult> => {
  const {
    data: { query, info, result },
  } = await instance.get<ExchangeResponse>("/convert", { params: credentials });

  return { ...query, rate: info.rate, result };
};

export const latestRates = async (
  baseCurrency: string
): Promise<ExchangeRates> => {
  const { data } = await instance.get(`/latest?symbol&base=${baseCurrency}`);
  return data.rates;
};
