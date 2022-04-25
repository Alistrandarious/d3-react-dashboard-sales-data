import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendsOverTime from "../visualizations/TrendsOverTimeMain";
import InitialView from "../visualizations/InitialView";
import CountriesAndRegions from "../visualizations/CountriesAndRegionsMain";
import ResponseTime from "../visualizations/ResponseTimeMain";
import ErrorPage from "../visualizations/ErrorPage";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<InitialView />}></Route>
        <Route path="/TrendsOverTime" element={<TrendsOverTime />}></Route>
        <Route
          path="/CountriesAndRegions"
          element={<CountriesAndRegions />}
        ></Route>
        <Route path="/ResponseTime" element={<ResponseTime />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
