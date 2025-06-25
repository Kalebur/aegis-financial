import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
