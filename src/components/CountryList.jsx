import React, { useState } from "react";

const CountryList = ({ regionData }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleCountryInfo = (country) => {
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  return (
    <div>
      <h1> Countries: </h1>
      <ul className="grid-container">
        {regionData &&
          regionData.map((country, index) => (
            <li className="list-style" key={index}>
              {country.flags && (
                <img className="image"
                  src={country.flags.svg}
                  alt={`Flag of ${country.name?.common}`}
                  onClick={() => toggleCountryInfo(country)}
                  style={{ cursor: "pointer" }}
                />
              )}
              {selectedCountry === country && (
                <div className="info-container">
                  <p className="info-style">Country: {country.name?.common}</p>
                  <p className="info-style">Capital: {country.capital}</p>
                  <p className="info-style">Population: {country.population}</p>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountryList;
