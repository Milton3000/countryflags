import React, { useState } from "react";

const CountryList = ({ regionData }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleCountryInfo = (country) => {
    setSelectedCountry(country);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1> Countries: </h1>
      <ul className="grid-container">
        {regionData &&
          regionData.map((country, index) => (
            <li className="list-style" key={index}>
              {country.flags && (
                <img
                  className="image"
                  src={country.flags.svg}
                  alt={`Flag of ${country.name?.common}`}
                  onClick={() => toggleCountryInfo(country)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </li>
          ))}
      </ul>

      {selectedCountry && isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <b>CLOSE</b>
            </span>
            <h2>Country Information</h2>
            <p>Country: {selectedCountry.name?.common}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryList;
