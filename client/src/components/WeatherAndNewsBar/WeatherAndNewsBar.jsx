import "./WeatherAndNewsBar.css";

import { useFetch } from "../../hooks";
import { WeatherWidget } from "..";
import { useMemo } from "react";
import { NewsWidget } from "../NewsWidget/NewsWidget";

export const WeatherAndNewsBar = () => {
  const locationUri = "http://ip-api.com/json/";
  const { data: locationData } = useFetch(locationUri);

  const weatherURI = useMemo(() => {
    if (!locationData?.lat || !locationData?.lon) return null;
    return `https://api.open-meteo.com/v1/forecast?latitude=${locationData.lat}&longitude=${locationData.lon}&hourly=temperature_2m&current=weather_code,temperature_2m&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
  }, [locationData]);

  const { data: weatherData } = useFetch(weatherURI);

  const newsQuery = useMemo(() => {
    if (!locationData?.city || !locationData?.region) return null;
    return `${locationData.city} ${locationData.region}`;
  }, [locationData]);

  const apiLink = newsQuery
    ? `http://localhost:5000/api/news?query=${newsQuery}`
    : null;

  const { data: news } = useFetch(apiLink);

  return (
    <section className="left-sidebar">
      {weatherData.current && news ? (
        <>
          <WeatherWidget
            current_temp={weatherData.current.temperature_2m}
            temp_unit={weatherData.current_units.temperature_2m}
            city={locationData.city}
          />
          <NewsWidget articles={news} />
        </>
      ) : (
        "Loading weather and news articles..."
      )}
    </section>
  );
};
