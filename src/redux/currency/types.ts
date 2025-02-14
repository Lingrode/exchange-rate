export type CurrencyState = {
  baseCurrency: string;
};

export type OpenCageResponse = {
  results: {
    annotations: {
      currency: {
        iso_code: string;
      };
    };
  }[];
};

export type OpenCageCredentials = {
  latitude: number;
  longitude: number;
};
