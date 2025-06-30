import "./Home.css";
import { WeatherAndNewsBar } from "../../components";
import { LoginBar } from "../../components";
import { MainContent } from "./components/MainContent/MainContent";

export const Home = () => {
  return (
    <main>
      <WeatherAndNewsBar />
      <MainContent />
      <LoginBar />
    </main>
  );
};
