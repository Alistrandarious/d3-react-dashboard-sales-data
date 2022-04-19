import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import TrendsOverTime from "./D3/TrendsOverTime";
import InitialView from "./D3/InitialView";
import CountriesAndRegions from "./D3/CountriesAndRegions";
import ResponseTime from "./D3/ResponseTime";
import ErrorPage from "./D3/ErrorPage";

function Navigation() {
  return (
    <Router>
    <div className="overflow-hidden">
      <div className="row">
        <div className="col-xl">
          <h3>Trends Over Time</h3>
          <small className="text-muted">
            Discovering and surfacing trends over time.
          </small>
          <br />
          <Link to="/TrendsOverTime">
          <button type="button" className="btn btn-primary">
            Load
          </button>
          </Link>
        </div>
        <div className="col-xl">
          <h3>Countries and Regions</h3>
          <small className="text-muted">Visualizing the customer base.</small>
          <br />
          <Link to="/CountriesAndRegions">
          <button type="button" className="btn btn-primary">
            Load
          </button>
          </Link>
        </div>
        <div className="col-xl">
          <h3>Response Time</h3>
          <small className="text-muted">
            What can we understand about processors and their speed?
          </small>
          <br />
          <Link to="/ResponseTime">
          <button  type="button" className="btn btn-primary">
            Load
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Routes>
    <Route path="/" element={<InitialView/>}></Route>
      <Route path="/TrendsOverTime" element={<TrendsOverTime/>}></Route>
      <Route path="/CountriesAndRegions" element={<CountriesAndRegions/>}></Route>
      <Route path="/ResponseTime" element={<ResponseTime/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </Router>
  );
}

export default Navigation;
