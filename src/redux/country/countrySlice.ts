import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCountries } from "./thunk-api";
import { Countries, Country } from "./types";
import { API } from "../../utils/api-responses";

interface CounterState {
  countries: Countries;
}

const initialState: CounterState = {
  countries: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountries.fulfilled,
      (state, action: PayloadAction<API.Countries>) => {
        const countries: Countries = [];

        for (const country of action.payload) {
          const newCountry: Country = {
            name: country.name.official,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flags: country.flags.png,
          };
          countries.push(newCountry);
        }
        state.countries = countries;
      }
    );
  },
});

export default countrySlice.reducer;
