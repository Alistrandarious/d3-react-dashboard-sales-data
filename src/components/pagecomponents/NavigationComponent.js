import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendsOverTime from "../visualizations/TrendsOverTimeMain";
import InitialView from "../visualizations/InitialView";
import CountriesAndRegions from "../visualizations/CountriesAndRegionsMain";
import AnyHome from "../visualizations/AnyHome";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/AnalysisOverview" element={<InitialView />}></Route>
        <Route path="/TrendsOverTime" element={<TrendsOverTime />}></Route>
        <Route
          path="/CountriesAndRegions"
          element={<CountriesAndRegions />}
        ></Route>
        <Route path="*" element={<AnyHome />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
