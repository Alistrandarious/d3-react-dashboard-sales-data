import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import regiondata from "./regiondata.csv";
import regionandcountrydata from "./regionandcountrydata.csv";

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
  .style("padding", "2px");

var colourScale = d3
  .scaleOrdinal()
  .domain(["Europe", "Americas", "Oceania", "Asia", "Africa"])
  .range(["#571845", "#c70009", "#ffc300"]);

const VisualOne = () => {
  const pieChart = useRef();
  const barChart = useRef();

  useEffect(
    () => {
      d3.csv(regiondata).then((d) => {
        //Removes repeat instances
        d3.select("#car-viz-one g").remove();

        //Data Formatting
        d.forEach(function (d) {
          d.size = +d.size;
        });

        //Set Margin and dimensions
        const margin = { top: 50, right: 50, bottom: 50, left: 75 };
        const width = parseInt(d3.select(".visual-box").style("width")) / 2;
        const height = parseInt(d3.select(".visual-box").style("height")) / 2;
        const size = d3.sum(d, (d) => d.size);
        const marginbox = {
          top: 50,
          right: 30,
          bottom: height * 0.25,
          left: 120,
        };
        const max = d3.max(d, function (d) {
          return d.size;
        });

        //Build the SVG
        const svg = d3
          .select(pieChart.current)
          .attr("id", "car-viz-one")
          .attr("width", width)
          .attr("height", height)
          .style("position", "absolute")
          .style("bottom", 0)
          .style("right", margin.right)
          .style("margin-bottom", marginbox.bottom + marginbox.top)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

        const x = d3
          .scaleBand()
          .domain(d3.range(d.length))
          .range([0, width- margin.right - margin.left])
          .padding(0.6);

        const y = d3
          .scaleLinear()
          .domain([0, max])
          .range([height - margin.bottom, margin.top]);

        svg
          .selectAll("HBar")
          .data(d)
          .enter()
          .append("rect")
          .attr("x", (d, i) => x(i))
          .attr("y", (d) => y(d.size))
          .attr("height", (d) => y(0) - y(d.size))
          .attr("width", x.bandwidth())
          .attr("fill", function (d) {
            return colourScale(d.REGION);
          })
          .on("mouseover", function (event, d) {
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip
              .html(
                "<b>Perc. of total:</b> " +
                  ((d.size / size) * 100).toFixed(2) +
                  "%" +
                  "<br/><b>Region: </b>" +
                  d.REGION
              )
              .style("left", event.pageX + 5 + "px")
              .style("top", event.pageY - 50 + "px");
          })
          .on("mouseout", function (d) {
            tooltip.transition().duration(500).style("opacity", 0);
          });

        svg.append("g").call(d3.axisBottom(x).tickFormat((i) => d[i].REGION));

        svg
          .append("g")

          .call(d3.axisLeft(y).ticks(null, d.format))
          .selectAll("text")
          .attr("transform", `translate(0, -5)`)
          .style("text-anchor", "end");

        svg
          .selectAll("text")
          .style("color", "white")
          .style("font-size", "12px");
      });
    },

    d3.csv(regionandcountrydata).then((d) => {
      //Data Formatting
      d.forEach(function (d) {
        d.size = +d.size;
      });

      //Set Margin and dimensions
      const margin = { top: 50, right: 30, bottom: 10, left: 120 };
      const width = parseInt(d3.select(".visual-box").style("width"));
      const height = parseInt(d3.select(".visual-box").style("height"));
      const size = d3.sum(d, (d) => d.size);
      const max = d3.max(d, function (d) {
        return d.size;
      });
      //Build the SVG
      const svg = d3
        .select(barChart.current)
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "black")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //Add X Axis
      var x = d3
        .scaleLinear()
        .domain([0, max])
        .range([0, width - margin.left - margin.right]);

      //Prepare X Axis labels
      svg
        .append("g")
        .attr(
          "transform",
          "translate(0," + height - margin.top - margin.bottom + 1 + ")"
        )
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(3,-6)rotate(0)")
        .style("text-anchor", "start")
        .style("color", "white")
        .style("font-size", "1vw");

      //Add Y Axis
      var y = d3
        .scaleBand()
        .range([0, height - height * 0.25])
        .domain(
          d.map(function (d) {
            return d.COUNTRY;
          })
        )
        .padding(0.5);

      svg.append("g").call(d3.axisLeft(y));

      //Bars
      svg
        .selectAll("HBar")
        .data(d)
        .enter()
        .append("rect")
        .attr("x", x(0))
        .attr("y", function (d) {
          return y(d.COUNTRY);
        })
        .attr("width", function (d) {
          return x(d.size);
        })
        .attr("height", y.bandwidth())
        .attr("fill", function (d) {
          return colourScale(d.REGION);
        })
        .on("mouseover", function (event, d) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(
              "<b>Country: </b>" +
                d.COUNTRY +
                "<br/>" +
                "<b>Perc. of total:</b> " +
                ((d.size / size) * 100).toFixed(2) +
                "%" +
                "<br/><b>Region: </b>" +
                d.REGION
            )
            .style("left", event.pageX + 5 + "px")
            .style("top", event.pageY - 50 + "px");
        })
        .on("mouseout", function (d) {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      //Edit all text
      svg.selectAll("text").style("font-size", "12px").style("color", "white");
    }),

    []
  );

  return (
    <div id="regionData-page1">
      <svg ref={barChart}></svg>
      <svg ref={pieChart}></svg>
    </div>
  );
};

export default VisualOne;
