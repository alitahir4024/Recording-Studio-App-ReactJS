import React from "react"
import {FooterData} from "./Footer.js";

export default class Footer extends React.Component{
    state={
        Data:FooterData,
    }

    render(){
        let response=this.state.Data.map((obj,index)=>{
            return(
                <div key={index}>
                    <img src={obj.src} alt=""/>
                    <ul>
                        <li> <i class="fas fa-map-marker-alt"></i> {obj.li1} </li>
                        <li> <i class="fas fa-phone-alt"></i> {obj.li2} </li>
                        <li> <i class="far fa-envelope"></i> {obj.li3} </li>
                    </ul>
                    <p> {obj.copy} </p>
                    <ol>
                        <li><i class="fab fa-behance"></i></li>
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-git-alt"></i></li>
                        <li><i class="fab fa-youtube"></i></li>
                    </ol>
                </div>
            )
        })
        return(
            <footer> {response} </footer>
        )
    }
}