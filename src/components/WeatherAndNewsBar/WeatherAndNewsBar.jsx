import "./WeatherAndNewsBar.css";

import { useFetch } from "../../hooks";
import { WeatherWidget } from "../";

export const WeatherAndNewsBar = () => {
  const locationUri = "http://ip-api.com/json/";
  const { data: locationData } = useFetch(locationUri);

  const weatherURI = locationData
    ? `https://api.open-meteo.com/v1/forecast?latitude=${locationData.lat}&longitude=${locationData.lon}&hourly=temperature_2m&current=weather_code,temperature_2m&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`
    : null;
  const { data: weatherData } = useFetch(weatherURI);

  return (
    <section className="left-sidebar">
      {weatherData.current ? (
        <WeatherWidget
          current_temp={weatherData.current.temperature_2m}
          temp_unit={weatherData.current_units.temperature_2m}
          city={locationData.city}
        />
      ) : (
        "Loading weather and news articles..."
      )}
    </section>
  );
};
