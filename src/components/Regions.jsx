import React, { useState } from "react";
import Africa from "./Africa";
import Asia from "./Asia";
import Europe from "./Europe";

const Regions = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegions = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <h1> Choose a Region: </h1>
      <select onChange={(e) => handleRegions(e.target.value)}>
        <option value="africa"> Africa </option>
        <option value="asia"> Asia </option>
        <option value="europe"> Europe </option>
      </select>

      <button
        onClick={() => console.log(`Fetching data for ${selectedRegion}`)}
      >
        {" "}
        Get Data{" "}
      </button>

      {selectedRegion === "africa" && <Africa />}
      {selectedRegion === "asia" && <Asia />}
      {selectedRegion === "europe" && <Europe />}
    </div>
  );
};

export default Regions;
