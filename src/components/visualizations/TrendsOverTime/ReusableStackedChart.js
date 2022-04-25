import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { stack } from "d3";

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
  .style("padding", "2px");

const StackedBarChart = ({ data, interval }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    d3.csv(data).then((d) => {
      //Set Bounds
      const margin = { top: 50, right: 50, bottom: 50, left: 75 };
      const width = parseInt(d3.select(".visual-box").style("width"));
      const height = parseInt(d3.select(".visual-box").style("height"));

      //Max
      const max = d3.max(d, function (d) {
        let sum = 0;
        for (const key in d) {
          if (key != "index" && key != "DATE" && key != "") {
            sum += parseInt(d[key]);
          }
        }
        return sum;
      });

      console.log(max)

      //SVG Creation
      //Build the SVG
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "black")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // List of subgroups = header of the csv files = soil condition here
      const subgroups = d.columns.slice(1);

      // List of groups = species here = value of the first column called group -> I show them on the X axis

      // Add X axis
      const x = d3
        .scaleBand()
        .domain(d3.range(d.length))
        .range([0, width - margin.right - margin.left])
        .padding([0.3]);

      svg
        .append("g")
        .attr("transform", `translate(0, ${height * 0.75})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

      // Add Y axis
      const y = d3
        .scaleLinear()
        .domain([0, max])
        .range([height * 0.75, 0]);
      svg.append("g").call(d3.axisLeft(y));

      // color palette = one color per subgroup
      const color = d3
        .scaleOrdinal()
        .domain([subgroups])
        .range(d3["schemeDark2"]);

      //stack the data? --> stack per subgroup
      const stackedData = d3.stack().keys(subgroups)(d);

      // Show the bars
      svg
        .append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .join("g")
        .attr("fill", (d) => color(d.key))
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data((d) => d)
        .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", (d) => y(d[1]))
        .attr("height", (d) => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth())
        .on("mouseover", function (event, d) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(() => {
              var total =
                parseInt(d.data.BRAINTREE) +
                parseInt(d.data.CHECKOUT) +
                parseInt(d.data.KLARNA) +
                parseInt(d.data.STRIPE);
              return (
                "<b>Date: </b>" +
                d.data.DATE +
                "<br/>" +
                "<b>Total BRAINTREE: </b>£" +
                parseInt(d.data.BRAINTREE).toLocaleString() +
                "<br/>" +
                "<b>Total CHECKOUT: </b>£" +
                parseInt(d.data.CHECKOUT).toLocaleString() +
                "<br/>" +
                "<b>Total KLARNA: </b>£ " +
                parseInt(d.data.KLARNA).toLocaleString() +
                "<br/>" +
                "<b>Total STRIPE: </b>£" +
                parseInt(d.data.STRIPE).toLocaleString() +
                "<br/>"
              );
            })
            .style("left", event.pageX + 5 + "px")
            .style("top", event.pageY - 50 + "px");
        })
        .on("mouseout", (d) => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      var legend = svg
        .append("g")
        .attr("class", "legend")
        .attr("transform", "translate(" + margin.top - margin.right + ", 0)");

      legend
        .selectAll("rect")
        .data(stackedData)
        .enter()
        .append("rect")
        .attr("x", 50)
        .attr("y", function (d, i) {
          return i * 18;
        })
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", (d) => color(d.key));

      legend
        .selectAll("text")
        .data(subgroups)
        .enter()
        .append("text")
        .text(function (d) {
          return d;
        })
        .attr("x", 68)
        .attr("y", function (d, i) {
          return i * 18;
        })
        .attr("text-anchor", "start")
        .attr("alignment-baseline", "hanging")
        .attr("fill", "white");
    });
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default StackedBarChart;
