import React from "react";
import Header from "./HeaderComponent";
import Navigation from "./NavigationComponent";
import Footer from "./FooterComponent";

import InitialView from "./D3/InitialView";
import CountriesAndRegions from "./D3/CountriesAndRegions";


function Main() {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header/>
      <Navigation/>
      <Footer/>
      </div>
  );
}

export default Main;
