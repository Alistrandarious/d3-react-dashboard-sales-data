import React from "react";
import VisualOne from "./CountriesAndRegions/visualone";
import VisualTwo from "./CountriesAndRegions/visualtwo";
import VisualThree from "./CountriesAndRegions/visualthree";
import { Carousel } from "react-bootstrap";

function CountriesAndRegions() {
  return (
    <div className="visual-box">
      <Carousel>
        <Carousel.Item interval={100000000000}>
          <VisualTwo />
          <Carousel.Caption>
            <div className="slider-title">World Choropleth</div>
            <div className="slider-footer">
              Data shows the retailer has had transactions issued from 133
              countries. Sweden has the highest amount of transactions issued,
              with 36,714.{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <VisualOne />
          <Carousel.Caption>
            <div className="slider-title">
              Top 10 Countries by individual transation
            </div>
            <div className="slider-footer">
              Analysis shows that of the top 10 countries found found in the
              data, 7 are in europe. Further, 71.57% of all unique transactions
              are in Europe. A prime Region to explore.{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <VisualThree />
          <Carousel.Caption>
            <div className="slider-title">
              Top 15 Countries by total transaction value
            </div>
            <div className="slider-footer">
              Although Sweden is the location with the most transactions, it is infact the UK with the highest spend of any country - netting over 11 million in one month. With Europe generating 84% of revenue for the business, it makes sense for Primer to encourage this retailer to target both Europe, and the UK. 
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CountriesAndRegions;
