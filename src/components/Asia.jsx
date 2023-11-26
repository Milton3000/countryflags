import React, { useState, useEffect } from "react";

const Asia = () => {
  const [asiaData, setAsiaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/asia"
      );
      const data = await response.json();
      setAsiaData(data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1> Countries: </h1>
      <ul>
        {asiaData &&
          asiaData.map((country) => (
            <li key={country.alpha2Code}>{country.name.common}</li>
          ))}
      </ul>
    </div>
  );
};


export default Asia;
