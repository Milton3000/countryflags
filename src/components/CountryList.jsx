

import React from "react";

const CountryList = ({ regionData }) => {
  if (!regionData || !Array.isArray(regionData)) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h1> Countries: </h1>
      <ul>
        {regionData.map((country, index) => (
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
