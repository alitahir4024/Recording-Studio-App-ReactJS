import React from "react";
import { LandingPageData } from "./LandingPage.js";

export default class LandingPage extends React.Component {
  state = {
    Data: LandingPageData,
  };

  render() {
    let response = this.state.Data.map((obj, index) => {
      return (
        <div className="landing-page-text" key={index}>
          <h1>
            {obj.h1} <br /> {obj.h2}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ipsam<br/>exercitationem soluta iusto vero eius neque, numquam velit
            sapiente tenetur.
          </p>
          <button className="g-btn"> {obj.BtnText} </button>
        </div>
      );
    });
    return <section> {response} </section>;
  }
}
