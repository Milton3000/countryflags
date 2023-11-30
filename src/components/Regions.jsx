
import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";

const Regions = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regionData, setRegionData] = useState([]);
  const [getDataClicked, setGetDataClicked] = useState(false);

  const fetchData = async () => {
    if (selectedRegion && getDataClicked) {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${selectedRegion}`
      );
      const data = await response.json();
      console.log("Fetched data:", data);
      setRegionData(data);
    }
    setGetDataClicked(false); 
  };

  useEffect(() => {
    fetchData();
  }, [selectedRegion, getDataClicked]);

  const handleRegions = async (region) => {
    setSelectedRegion(region);
  };

  const handleGetData = () => {
    setGetDataClicked(true);
  };

  const handleReset = () => {
    setSelectedRegion("");
    setRegionData([]);
    setGetDataClicked(false);
  };

  return (
    <div>
      <h1> Choose a Region: </h1>
      <select onChange={(e) => handleRegions(e.target.value)}>
        <option value=""> Select Region </option>
        <option value="africa"> Africa </option>
        <option value="asia"> Asia </option>
        <option value="europe"> Europe </option>
      </select>

      <button onClick={handleGetData}> Get Data </button>
      <button onClick={handleReset}> Reset </button>

      <CountryList regionData={regionData} />
    </div>
  );
};

export default Regions;
