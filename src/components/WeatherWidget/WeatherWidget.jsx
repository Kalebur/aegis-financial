import "./WeatherWidget.css";

export const WeatherWidget = ({ current_temp, temp_unit, city }) => {
  return (
    <div className="weather-widget">
      <span className="current-temp">
        {current_temp}
        {temp_unit}
      </span>
      <span className="city">{city}</span>
    </div>
  );
};
