import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const fetchCountries = createAsyncThunk(
  "countries/fetch/all",
  async () => {
    const response = await request({
      url: `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,currencies,name,languages,tld,subregion`,
    });
    return response.data;
  }
);
