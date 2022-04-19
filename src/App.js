import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="container-fluid">
      <header>
        <h1>Primer Project - Data Visualization</h1>
        <p className="lead">
          Utilizing a JSON dataset of one month of payment data for an anonymous
          merchant, I have set out to tell <b>three stories using D3 and react </b> for
          you to explore. 
          <br></br>
          I have prioritized <b>storytelling and creativity </b>
          by providing a unique way to explore the visuals and in my approach in
          creating them. I have boosted
          <b> speed and user experience</b> by using aggregated tables and react
          hooks for a single-page application. I have ensured that my 
          <b> code is of high quality</b> and leveraged git to house my
          work.
          <br></br>
          <br></br>
          I hope you enjoy this project and see my passion for working with
          Primer.io.
          </p>
      </header>
      <div class="row">
        <div class="col-xl">
          <h3>Trends Over Time</h3>
          <small className="text-muted">
            Discovering and surfacing trends over time.
          </small>
        </div>
        <div class="col-xl">
          <h3>Countries and Regions</h3>
          <small className="text-muted">Visualizing the customer base.</small>
        </div>
        <div class="col-xl">
          <h3>Response Time</h3>
          <small className="text-muted">
            What can we understand about processors and their speed?
          </small>
        </div>
      </div>
      <footer>
        This project was complete by&nbsp;
        <a href="https://www.linkedin.com/in/alis/">Ali Shah</a>
      </footer>
    </div>
  );
}

export default App;
