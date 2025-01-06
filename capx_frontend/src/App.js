import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import StockDetails from "./StockDetails";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock/:id" element={<StockDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
