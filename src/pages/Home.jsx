import "./Home.css";
import { WeatherAndNewsBar } from "../components/WeatherAndNewsBar/WeatherAndNewsBar";
import { LoginBar } from "../components/LoginBar/LoginBar";

export const Home = () => {
  return (
    <main>
      <WeatherAndNewsBar />
      <section className="main-content">Main Content</section>
      <LoginBar />
    </main>
  );
};
