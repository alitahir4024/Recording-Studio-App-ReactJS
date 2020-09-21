import React from "react";
import {ArtistAnimationData} from "./ArtistAnimation.js";

export default class ArtistAnimation extends React.Component{
    state={
        Data:ArtistAnimationData,
    }

    render(){
        let response=this.state.Data.map((obj,index)=>{
            return(
                <ul key={index}>
                    <li> <img src={obj.ArtistImg1} alt=""/> </li>
                    <li> <img src={obj.ArtistImg2} alt=""/> </li>
                    <li> <img src={obj.ArtistImg3} alt=""/> </li>
                    <li> <img src={obj.ArtistImg4} alt=""/> </li>
                    <li> <img src={obj.ArtistImg5} alt=""/> </li>
                    <li> <img src={obj.ArtistImg6} alt=""/> </li>
                    <li> <img src={obj.ArtistImg7} alt=""/> </li>
                    <li> <img src={obj.ArtistImg8} alt=""/> </li>
                    <li> <img src={obj.ArtistImg9} alt=""/> </li>
                    <li> <img src={obj.ArtistImg10} alt=""/> </li>
                    <li> <img src={obj.ArtistImg11} alt=""/> </li>
                </ul>
            )
        })
        return(
            <div className="artist-animation"> {response} </div>
        )
    }
}