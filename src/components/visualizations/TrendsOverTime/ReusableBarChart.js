import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function toUniqueArray(a) {
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    if (newArr.indexOf(a[i]) === -1) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
  .style("padding", "2px");

const BarChart = ({ data, interval, datatype }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    d3.csv(data).then((d) => {
      //Removes repeat instances
      // d3.select("#tot-viz-one g").remove();
      // d3.select("#tot-viz-two g").remove();
      //Set Bounds
      const margin = { top: 50, right: 50, bottom: 50, left: 75 };
      const width = parseInt(d3.select(".visual-box").style("width"));
      const height = parseInt(d3.select(".visual-box").style("height"));
      const size = d3.sum(d, (d) => d.size);

      //Max
      const max = d3.max(d, function (d) {
        return d.size;
      });

      //SVG Creation
      //Build the SVG
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "black")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //Build X Axis
      const x = d3
        .scaleBand()
        .domain(d3.range(d.length))
        .range([0, width - margin.right - margin.left]);

      //Colour Scale

      const listOfWeeks = d.map((row) => row.WEEK);
      const uniqueWeeks = toUniqueArray(listOfWeeks);
  

      //colourscale
      var colourScale = d3
        .scaleOrdinal()
        .domain([uniqueWeeks])
        .range(d3["schemeCategory10"]);

      if (interval === "WEEK") {
        x.padding(0.25);
      } else {
        x.padding(0.4);
      }

      // Build Y Axis
      const y = d3
        .scaleLinear()
        .domain([0, max])
        .range([height * 0.7, 0]);

      svg
        .append("g")
        .selectAll(".RBar")
        .attr(
          "transform",
          "translate(" + -margin.left + "," + -margin.top + ")"
        )
        .data(d)
        .enter()
        .append("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", (d) => y(d.size))
        .attr("height", (d) => y(0) - y(d.size))
        .attr("width", x.bandwidth())
        .attr("fill", (d) => {
          if (listOfWeeks[0] === undefined) {
            return "red";
          } else {
            return colourScale(d.WEEK);
          }
        })
        .on("mouseover", function (event, d) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(() => {
              if (datatype === "GBP" && interval === "WEEK") {
                return (
                  "<b>Amount:</b> £" +
                  parseInt(d.size).toLocaleString() +
                  "<br/>" +
                  "<b>Perc. of total:</b> " +
                  ((d.size / size) * 100).toFixed(2) +
                  "%"
                );
              }
              if (datatype === "GBP" && interval === "DATE") {
                return (
                  "<b>Day:</b> " +
                  d.WEEKDAY +
                  "<br/><b>Amount:</b> £" +
                  parseInt(d.size).toLocaleString() +
                  "<br/>" +
                  "<b>Perc. of total:</b> " +
                  ((d.size / size) * 100).toFixed(2) +
                  "%"
                );
              }
              if (datatype === "SIZE" && interval === "DATE") {
                return (
                  "<b>Day:</b> " +
                  d.WEEKDAY +
                  "<br/><b>Amount:</b> " +
                  parseInt(d.size).toLocaleString() +
                  "<br/>" +
                  "<b>Perc. of total:</b> " +
                  ((d.size / size) * 100).toFixed(2) +
                  "%"
                );
              } else {
                return (
                  "<b>Amount: </b>" +
                  parseInt(d.size).toLocaleString() +
                  "<br><b>Perc. of total:</b> " +
                  ((d.size / size) * 100).toFixed(2) +
                  "%"
                );
              }
            })
            .style("left", event.pageX + 5 + "px")
            .style("top", event.pageY - 50 + "px");
        })
        .on("mouseout", (d) => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      svg
        .append("g")
        .attr("transform", "translate(0," + height * 0.7 + ")")
        .call(
          d3.axisBottom(x).tickFormat((i) => {
            if (interval === "WEEK") {
              return d[i].WEEK;
            } else {
              return d[i].DATE || d[i].WEEKDAY;
            }
          })
        );

      svg
        .append("g")
        .call(d3.axisLeft(y).ticks(null, d.format))
        .selectAll("text")
        .attr("transform", `translate(0, -5)`)
        .style("text-anchor", "end");

      svg.selectAll("text").style("color", "white").style("font-size", "12px");
    });
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
