/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage.jsx";
import "./App.css"
import Triplets from "./triplets.jsx";
import Percopo from "./percopo.jsx";
import LakesideNorth from "./lakesideNorth.jsx";
import LakesideSouth from "./lakesideSouth.jsx";
import Bic from "./bic.jsx";
import Commuter from "./commuter.jsx";
import Hatfield from "./hatfield.jsx";
import Speed from "./speed.jsx";
import Src from "./src.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/triplets" element={<Triplets />} />
        <Route path="/percopo" element={<Percopo />} />
        <Route path="/lakesideNorth" element={<LakesideNorth />} />
        <Route path="/lakesideSouth" element={<LakesideSouth />} />
        <Route path="/bic" element={<Bic />} />
        <Route path="/commuter" element={<Commuter />} />
        <Route path="/hatfield" element={<Hatfield />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/src" element={<Src />} />
      </Routes>
    </Router>
  );
}

export default App