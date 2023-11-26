import React, { useEffect } from "react";

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
};

export default Asia