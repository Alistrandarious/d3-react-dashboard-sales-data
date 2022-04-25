import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import chloroplethdata from "./choropleth.geojson";

var tooltip = d3.select(".tooltip");

const VisualTwo = () => {
  const Choropleth = useRef();

  useEffect(() => {
    d3.json(chloroplethdata).then((d) => {
      //Removes repeat instances
      d3.selectAll("#car-viz-two g").remove();

      //Set Bounds
      const margin = { top: 50, right: 60, bottom: 60, left: 50 };
      const width = parseInt(d3.select(".visual-box").style("width"));
      const height = parseInt(d3.select(".visual-box").style("height"));

      //Select SVG
      const svg = d3.select(Choropleth.current).attr("id", "car-viz-two");

      const max = d3.max(
        d.features,
        (features) => features.properties.primer_size
      );

      // var colourScale = d3
      //   .scaleSequential(d3.interpolateBuPu)
      //   .domain([min + 50, max/30]);

      //Fit world
      const projection = d3
        .geoMercator()
        .fitSize(
          [
            width - margin.left - margin.right,
            height - margin.top - margin.bottom,
          ],
          d
        );

      //Generate Paths
      const pathGenerator = d3.geoPath().projection(projection);

      //Draw
      svg
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "black")
        .append("g")
        .attr("transform", "translate(0, 20)")
        .selectAll(".country")
        .data(d.features)
        .join("path")
        .attr("class", "country")
        .attr("d", (feature) => pathGenerator(feature))
        .attr("fill", function (features) {
          Number.prototype.between = function (a, b) {
            return a > b ? this >= b && this <= a : this >= a && this <= b;
          };
          if (features.properties.primer_size == 0) {
            return "#3c3c3c";
          }
          if (features.properties.primer_size.between(1, 10)) {
            return "#D2D0DF";
          }
          if (features.properties.primer_size.between(11, 100)) {
            return "#B9B0C9";
          }

          if (features.properties.primer_size.between(101, 1000)) {
            return "#815485";
          }

          if (features.properties.primer_size.between(1001, 5000)) {
            return "#6E3669";
          }
          if (features.properties.primer_size.between(5001, max - 1)) {
            return "#571845";
          }
          if (features.properties.primer_size == max) {
            return "green";
          }
        })
        .on("mouseover", function (event, d) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(
              "<b>Country Name:</b> " +
                d.properties.name +
                "<br/><b>Count: </b>" +
                d.properties.primer_size.toLocaleString()
            )
            .style("left", event.pageX + 5 + "px")
            .style("top", event.pageY - 50 + "px");
        })
        .on("mouseout", function (d) {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      var legendData = [
        { name: "No Data", colour: "#3c3c3c" },
        { name: "Between 1 and 10", colour: "#D2D0DF" },
        { name: "Between 11 and 100", colour: "#B9B0C9" },
        { name: "Between 101 and 1000", colour: "#815485" },
        { name: "Between 1001 and 5000", colour: "#6E3669" },
        { name: "Between 5000 and max entry", colour: "#571845" },
        { name: "Max entry", colour: "green" },
      ];

      var legendItemSize = 12;
      var legendSpacing = 4;
      var xOffset = 150;
      var yOffset = 100;

      var legend = svg
        .append("g")
        .attr(
          "transform",
          "translate(" + width * 0.75 + "," + height * 0.5 + ")"
        )
        .selectAll(".legend-item")
        .data(legendData);

      legend
        .enter()
        .append("rect")
        .attr("class", "legendItem")
        .attr("width", legendItemSize)
        .attr("height", legendItemSize)
        .style("fill", (d) => d.colour)
        .attr("transform", (d, i) => {
          var x = xOffset;
          var y = yOffset + (legendItemSize + legendSpacing) * i;
          return `translate(${x}, ${y})`;
        });

      legend
        .enter()
        .append("text")
        .attr("x", xOffset + legendItemSize + 5)
        .attr(
          "y",
          (d, i) => yOffset + (legendItemSize + legendSpacing) * i + 12
        )
        .attr("fill", "white")
        .text((d) => d.name);
    });
  });

  return (
    <div id="regionData-page2">
      <svg ref={Choropleth}></svg>
    </div>
  );
};

export default VisualTwo;
