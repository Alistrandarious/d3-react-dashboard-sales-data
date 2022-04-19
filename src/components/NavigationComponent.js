import React from "react";

function Navigation() {
  return (
    <div class="overflow-hidden">
      <div class="row">
        <div class="col-xl">
          <h3>Trends Over Time</h3>
          <small className="text-muted">
            Discovering and surfacing trends over time.
          </small>
          <br />
          <button type="button" class="btn btn-primary">
            Load
          </button>
        </div>
        <div class="col-xl">
          <h3>Countries and Regions</h3>
          <small className="text-muted">Visualizing the customer base.</small>
          <br />
          <button type="button" class="btn btn-primary">
            Load
          </button>
        </div>
        <div class="col-xl">
          <h3>Response Time</h3>
          <small className="text-muted">
            What can we understand about processors and their speed?
          </small>
          <br />
          <button type="button" class="btn btn-primary">
            Load
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
