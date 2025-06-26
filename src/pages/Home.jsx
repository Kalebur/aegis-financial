import "./Home.css";
import { WeatherAndNewsBar } from "../components/WeatherAndNewsBar/WeatherAndNewsBar";

export const Home = () => {
  return (
    <main>
      <WeatherAndNewsBar />
      <section className="main-content">Main Content</section>
      <section className="right-bar">Right Content</section>
    </main>
  );
};
