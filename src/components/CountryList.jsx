
import React from "react";

const CountryList = ({ regionData }) => {

  return (
    <div>
      <h1> Countries: </h1>
      <ul>
        {regionData && regionData.map((country, index) => (
          <li key={index}>
            {country.name?.common} - {country.capital} - Population:{" "}
            {country.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
