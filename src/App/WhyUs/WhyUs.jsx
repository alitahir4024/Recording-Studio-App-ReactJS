import React from "react";
import { WhyUsData } from "./WhyUs.js";

export default class WhyUs extends React.Component {
  state = {
    Data: WhyUsData,
  };

  render() {
    let response = this.state.Data.map((obj, index) => {
      return (
        <div key={index}>
          <ul>
            <li>
              {" "}
              <img src={obj.li1} alt="" />{" "}
              <h6>
                Live Instruments <br />{" "}
                <span>
                  Curabitur fermentum vitae
                  <br />
                  eros eu porta. Curabitur et
                  <br />
                  risus egestas, vulputate lacus
                  <br />
                  eget.{" "}
                </span>
              </h6>
            </li>
            <li>
              {" "}
              <img src={obj.li2} alt="" />{" "}
              <h6>
                Multiple Studios <br />{" "}
                <span>
                  Curabitur fermentum vitae
                  <br />
                  eros eu porta. Curabitur et
                  <br />
                  risus egestas, vulputate lacus
                  <br />
                  eget.{" "}
                </span>
              </h6>
            </li>
            <li>
              {" "}
              <img src={obj.li3} alt="" />{" "}
              <h6>
                Professional Equipment <br />{" "}
                <span>
                  Curabitur fermentum vitae
                  <br />
                  eros eu porta. Curabitur et
                  <br />
                  risus egestas, vulputate lacus
                  <br />
                  eget.{" "}
                </span>
              </h6>
            </li>
          </ul>
          <img src={obj.SpeakerImg} alt="" />
          <img className="guitar-img" src={obj.GuitarImg} alt=""/>
          <img className="wave-img" src={obj.WaveImg} alt=""/>
          <ol>
            <li>
              {" "}
              <img src={obj.li4} alt="" />{" "}
              <h6>
                Own Arrangements <br />{" "}
                <span>
                  Curabitur fermentum vitae
                  <br />
                  eros eu porta. Curabitur et
                  <br />
                  risus egestas, vulputate lacus
                  <br />
                  eget.{" "}
                </span>
              </h6>
            </li>
            <li>
              {" "}
              <img src={obj.li5} alt="" />{" "}
              <h6>
                Extra Sound-Quality <br />{" "}
                <span>
                  Curabitur fermentum vitae
                  <br />
                  eros eu porta. Curabitur et
                  <br />
                  risus egestas, vulputate lacus
                  <br />
                  eget.{" "}
                </span>
              </h6>
            </li>
            <li>
              {" "}
              <img src={obj.li6} alt="" />
              <h6>
                Rights Protection <br />{" "}
                <span>
                  Curabitur fermentum vitae
                  <br />
                  eros eu porta. Curabitur et
                  <br />
                  risus egestas, vulputate lacus
                  <br />
                  eget.{" "}
                </span>
              </h6>
            </li>
          </ol>
        </div>
      );
    });
    return (
      <div className="why">
        <h1>Why Chose Us</h1>
        {response}{" "}
        <button className="g-btn">Learn More</button>
      </div>
    );
  }
}
