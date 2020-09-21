import React from "react";
import {AnimationData} from "./Animation.js";

export default class Animation extends React.Component{
    state={
        Data:AnimationData,
    }

    render(){
        let response=this.state.Data.map((obj,index)=>{
            return(
                <ul key={index}>
                    <li><img src={obj.icon1} alt=""/></li>
                    <li><img src={obj.icon2} alt=""/></li>
                    <li><img src={obj.icon3} alt=""/></li>
                    <li><img src={obj.icon4} alt=""/></li>
                    <li><img src={obj.icon5} alt=""/></li>
                    <li><img src={obj.icon6} alt=""/></li>
                </ul>
            )
        })
        return(
            <div className="animation"> {response} </div>
        )
    }
}