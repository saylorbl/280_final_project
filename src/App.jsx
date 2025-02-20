/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage.jsx";
import "./App.css"
import Triplets from "./triplets.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/triplets" element={<Triplets />} />
      </Routes>
    </Router>
  );
}

export default App