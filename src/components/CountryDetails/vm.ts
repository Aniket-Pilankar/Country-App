import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Country } from "../../redux/country/types";
import { useSelector } from "react-redux";
import { selectCountries } from "../../redux/country/selector";

type CountryDetailsParams = {
  slug: string;
};

export default function useCountryDetailsVM() {
  const { slug } = useParams<CountryDetailsParams>();
  const countries = useSelector(selectCountries);
  const navigate = useNavigate();

  const [country, setCountry] = useState<Country>();

  const findCountry = useCallback(() => {
    const country = countries.find((country) => country.name === slug);
    setCountry(country);
  }, [countries, slug]);

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    findCountry();
  }, [findCountry]);

  return { country, handleClick };
}
