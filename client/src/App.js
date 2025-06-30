import "./App.css";
import { Header } from "./components";
import { Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
