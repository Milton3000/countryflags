import React, { useEffect } from "react";

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
};

export default Europe