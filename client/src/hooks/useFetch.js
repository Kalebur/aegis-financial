import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!url) return;

      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [url]);

  return { data };
};
