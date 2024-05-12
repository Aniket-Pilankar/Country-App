import React from "react";
import useCountryDetailsVM from "./vm";

const CountryDetails = () => {
  const { country } = useCountryDetailsVM();
  console.log("country:", country);
  return <div>CountryDetails</div>;
};

export default CountryDetails;
