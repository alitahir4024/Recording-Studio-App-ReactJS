import React from "react";
import { ClientsData } from "./Clients.js";

export default class Clients extends React.Component {
  state = {
    Data: ClientsData,
  };

  render() {
    let response = this.state.Data.map((obj, index) => {
      return (
        <div className="clients" key={index}>
          <div> <img src={obj.Client1} alt=""/> </div>
          <div> <img src={obj.Client2} alt=""/> </div>
          <div> <img src={obj.Client3} alt=""/> </div>
          <div> <img src={obj.Client4} alt=""/> </div>
        </div>
      );
    });
    return (
      <div className="section">
        <h1> Clients Trust Us </h1>
        {response}
      </div>
    );
  }
}
