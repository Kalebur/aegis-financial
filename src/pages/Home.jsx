import "./Home.css";
import { WeatherAndNewsBar } from "../components";
import { LoginBar } from "../components";

export const Home = () => {
  return (
    <main>
      <WeatherAndNewsBar />
      <section className="main-content">Main Content</section>
      <LoginBar />
    </main>
  );
};
