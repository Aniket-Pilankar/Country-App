import React from "react";
import useHomePageVM from "./vm";

const HomePage = () => {
  const { countries } = useHomePageVM();
  return (
    <div>
      <h1>Home</h1>
      {countries.map((country) => (
        <h1>{country.name}</h1>
      ))}
    </div>
  );
};

export default HomePage;
