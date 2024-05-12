import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../redux/country/types";
import { useSelector } from "react-redux";
import { selectCountries } from "../../redux/country/selector";

type CountryDetailsParams = {
  slug: string;
};

export default function useCountryDetailsVM() {
  const { slug } = useParams<CountryDetailsParams>();
  const countries = useSelector(selectCountries);

  const [country, setCountry] = useState<Country>();

  const findCountry = useCallback(() => {
    const country = countries.find((country) => country.name === slug);
    setCountry(country);
  }, [countries, slug]);

  useEffect(() => {
    findCountry();
  }, [findCountry]);

  return { country };
}
