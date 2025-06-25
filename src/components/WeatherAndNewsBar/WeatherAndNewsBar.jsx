import { useState, useEffect } from "react";

export const WeatherAndNewsBar = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const locationResponse = await fetch("http://ip-api.com/json/");
        const locationData = await locationResponse.json();
        setLocation(locationData);

        const weatherURI = `https://api.open-meteo.com/v1/forecast?latitude=${locationData.lat}&longitude=${locationData.lon}&hourly=temperature_2m&current=weather_code,temperature_2m&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
        const weatherResponse = await fetch(weatherURI);
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
      } catch (e) {
        throw new Error(`Something went wrong: ${e.message}`);
      }
    }

    fetchLocation();
  }, []);
  return <section>WeatherAndNewsBar</section>;
};
