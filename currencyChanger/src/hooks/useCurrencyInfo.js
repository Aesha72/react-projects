import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency = "usd") {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
        );
        const result = await res.json();
        setData(result[baseCurrency]);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchData();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
