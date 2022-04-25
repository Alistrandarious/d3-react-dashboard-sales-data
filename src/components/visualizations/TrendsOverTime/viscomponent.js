import React from "react";
import * as d3 from "d3";

export default function VisComponent() {
  const refElement = useRef(null);

  return (
    <div id="trendsData-page1">
      <svg ref={refElement}></svg>
    </div>
  );
}
