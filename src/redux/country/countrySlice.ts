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
            naiveName: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flags: country.flags.png,
            subregion: country.subregion,
            currencies: country.currencies
              ? Object.values(country.currencies).map(
                  (currency) => currency.name
                )
              : [],
            tld: country.tld,
            languages: country.currencies
              ? Object.values(country.languages)
              : [],
            borders: country.borders,
          };
          countries.push(newCountry);
        }
        state.countries = countries;
      }
    );
  },
});

export default countrySlice.reducer;
