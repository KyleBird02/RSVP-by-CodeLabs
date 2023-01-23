import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Dont from "./components/Dont";
import Do from "./components/Do";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/donts" element={<Dont />} />
        <Route path="/dos" element={<Do />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
