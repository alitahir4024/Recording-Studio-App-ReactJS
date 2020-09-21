import React from "react";
import { ServicesData } from "./Services.js";

export default class Services extends React.Component {
  state = {
    Data: ServicesData,
  };

  render() {
    let response = this.state.Data.map((obj, index) => {
      return (
        <div className="_services" key={index}>
          <div className="service">
          <img src={obj.src1} alt="" />
          <h2> {obj.heading1} </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing<br/>elit. Facere,
            vitae? Molestiae veritatis fugit consequuntur expedita.
          </p>
          <button className="g-btn"> {obj.BtnText1} </button>
        </div>
        <div className="service">
          <img src={obj.src2} alt="" />
          <h2> {obj.heading2} </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing<br/>elit. Facere,
            vitae? Molestiae veritatis fugit consequuntur expedita.
          </p>
          <button className="g-btn"> {obj.BtnText2} </button>
        </div>
        </div>
      );
    });
    return (
      <div className="services">
        <h1>Studio Services</h1>
        {response}{" "}
      </div>
    );
  }
}
