import React, { useState, useEffect } from "react";

const Europe = () => {
  const [europeData, setEuropeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/europe"
      );
      const data = await response.json();
      setEuropeData(data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1> Countries: </h1>
      <ul>
        {europeData &&
          europeData.map((country) => (
            <li key={country.alpha2Code}>{country.name.common}</li>
          ))}
      </ul>
    </div>
  );
};


export default Europe;
