import { RootState } from "../types";

export const selectCountries = (state: RootState) => state.country.countries;
