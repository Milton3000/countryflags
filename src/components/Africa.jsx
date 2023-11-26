import React, { useState, useEffect } from "react";

const Africa = () => {
  const [africaData, setAfricaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/africa"
      );
      const data = await response.json();
      setAfricaData(data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1> Countries: </h1>
      <ul>
        {africaData &&
          africaData.map((country) => (
            <li key={country.alpha2Code}>{country.name.common}</li>
          ))}
      </ul>
    </div>
  );
};

export default Africa;
