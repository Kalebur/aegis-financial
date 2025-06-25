import { useState, useEffect } from "react";

export const WeatherAndNewsBar = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const locationResponse = await fetch("http://ip-api.com/json/");
        const locationData = await locationResponse.json();
        setLocation(locationData);
      } catch (e) {
        throw new Error(`Something went wrong: ${e.message}`);
      }
    }

    fetchLocation();
  }, []);
  return <section>WeatherAndNewsBar</section>;
};
