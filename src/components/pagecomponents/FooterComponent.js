import React from "react";
import primer from "../imgs/primerlogo.png";
import github from "../imgs/githublogo.png";

function Footer() {
  // const handleClick = (source) => {
  //   if (source === "primer") {
  //     window.open("https://primer.io/");
  //   }
  //   if (source === "github") {
  //     window.open("https://github.com/Alistrandarious/d3-react-dashboard-sales-data");
  //   }
  // };
  return (
    <footer>
      <div className="no-space">
        <br></br>This project currently isn't absolutely responsive. Can you
        make your window bigger and refresh the page?
        <br></br>
      </div>
      This project was complete by&nbsp;
      <a href="https://www.linkedin.com/in/AliS/">Ali Shah</a>
      <link rel="stylesheet" href="" />
      <img
        // onClick={handleClick("primer")}
        src={primer}
        className="primer-logo logo"
        alt="logo"
        title="Click here to be taken to Primer.io"
      />
      <img
        // onClick={handleClick("github")}
        src={github}
        className="github-logo logo"
        alt="logo"
        title="Click here to be taken to the git repo"
      />
    </footer>
  );
}

export default Footer;
