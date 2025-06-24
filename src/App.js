import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { MainPH } from "./components/MainPlaceholder/MainPH.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPH />
      <Footer />
    </div>
  );
}

export default App;
