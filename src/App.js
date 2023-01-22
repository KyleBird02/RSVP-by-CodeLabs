import './App.css';
import { Routes, Route} from "react-router-dom";
import Onboarding from './components/Onboarding';
import Dont from './components/Dont';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/donts" element={<Dont />} />
      </Routes>
    </div>
  );
}

export default App;
