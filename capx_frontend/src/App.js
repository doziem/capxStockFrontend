import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserService from "./UserService";
import StockService from "./StockService";
import Layout from "./Layout";
import PortfolioService from "./PortfolioService";

function App(props) {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserService />} />
          <Route path="/stock" element={<StockService />} />
          <Route path="/portfolio" element={<PortfolioService />} />C
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
