//This is my Trends Over Time carousel. I have functions BarChart and StackedBarChart and just pass the data through them to build what I need.

import React from "react";
import { Carousel } from "react-bootstrap";
import BarChart from "./TrendsOverTime/ReusableBarChart";
import StackedBarChart from "./TrendsOverTime/ReusableStackedChart";
import totvisoneData from "./TrendsOverTime/trendsovertimeweek.csv";
import totvistwoData from "./TrendsOverTime/trendsovertimedatepayments.csv";
import totvisthreeData from "./TrendsOverTime/dayofweekgroupingpayments.csv";
import totvisfourData from "./TrendsOverTime/processorsstackedbarchart.csv";
import totvisfiveData from "./TrendsOverTime/europestackedbarchart.csv";
import totvissixData from "./TrendsOverTime/Americastackedbarchart.csv";

export default function TrendsOverTime() {
  return (
    <div className="visual-box">
      <Carousel>
        <Carousel.Item interval={100000000000}>
          <div className="weekly-graph" id="tot-viz-one">
            <BarChart data={totvisoneData} interval="WEEK" datatype="GBP" />
          </div>
          <Carousel.Caption>
            <div className="slider-title">
              Trends over time - a weekly breakdown of revenue
            </div>
            <div className="slider-footer">
              Early exploration shows that sales increase by the end of the
              month, almost doubling from the start. But, the data is only
              available for August 2021 - just one month. Can we really make
              this kind of inference from the data? Let's explore further.
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <div className="weekly-graph" id="tot-viz-two">
            <BarChart data={totvistwoData} interval="DATE" datatype="GBP" />
          </div>
          <Carousel.Caption>
            <div className="slider-title">
              Trends over time - a daily breakdown of revenue
            </div>
            <div className="slider-footer">
            By breaking down each day by revenue generated we can see a pattern forming. It appears mid week, for every week, there is a dip in revenue generated. There is often a big swing upwards on Fridays, and lower days being Wednesdays/thursdays.
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <div className="weekly-graph" id="tot-viz-three">
            <BarChart data={totvisthreeData} interval="DATE" datatype="GBP" />
          </div>
          <Carousel.Caption>
            <div className="slider-title">
              Trends over time - a weekday breakdown of revenue
            </div>
            <div className="slider-footer">
              By summing the individual dates and running an average on the weekday itself, we can illustrate the most popular days where the store generates the most revenue. On average, Saturday is the day with the highest spend - but generally Friday through to Tuesday is a decent range of time for the store. 
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <div className="weekly-graph" id="tot-viz-four">
            <StackedBarChart data={totvisfourData} interval="DATE" datatype="GBP" />
          </div>
          <Carousel.Caption>
            <div className="slider-title">
              Trends over time - a weekday breakdown of revenue as a stacked barchart of processors
            </div>
            <div className="slider-footer">
              When investigating the steady rise towards the end of the month, it becomes aparent that the growth is largely attributable, to what seems to be, new payment types added by the retailer to their site. With Checkout and Klarna being offered, their revenue has been boosted by over 10% - and the popular days of the week only benefit further ontop of this, as almost a compounding effect.  
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <div className="weekly-graph" id="tot-viz-five">
            <StackedBarChart data={totvisfiveData} interval="DATE" datatype="GBP" />
          </div>
          <Carousel.Caption>
            <div className="slider-title">
              Trends over time - a weekday breakdown of revenue in Europe as a stacked barchart of Klarna Use
            </div>
            <div className="slider-footer">
              By looking at the highest grossing region, Europe, and some processors - it is apparent that the uptick towards the end of the month is not due to an end of the month effect, but by use of Payment Processors and their implementation in relevant regions. As a snapshot, We can see it being used heavily in Europe (Sweden and Denmark), which netted the business an additional £300,000.  
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000000000}>
          <div className="weekly-graph" id="tot-viz-five">
            <StackedBarChart data={totvissixData} interval="DATE" datatype="GBP" />
          </div>
          <Carousel.Caption>
            <div className="slider-title">
              Trends over time - a weekday breakdown of revenue in Americas as a stacked barchart of Checkout Use
            </div>
            <div className="slider-footer">
              Checkout was Implmented in America at a similar time as Klarna in Europe. While the data is more sporadic, big traffic was drove on the 25/08. This resulted in near £600,000 revenue for the payment taker. In all, almost £1m was raised in half a month from offering customers additional payment options.  
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
