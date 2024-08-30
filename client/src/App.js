import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Create from "./components/create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
