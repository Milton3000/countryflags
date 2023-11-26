import React, { useEffect } from "react";

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
};

export default Africa
