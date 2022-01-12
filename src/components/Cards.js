import React from "react";
import location from "../images/location_icon.png"

export default function Cards(props) {
    


    return (
            <div className="card--main">
            <div className="card">
                <img src={props.img} className="card--image" alt="japan"/>
                
                <div className="card--stats">

                    <img className= "card--location" src={location} alt="location_icon" width="10px"/>
                    <span>{props.country}</span>
                    <span className="maps--span"><a className="location--link" target="_blank" href={`${props.location}`} rel="noreferrer">View on Google Maps</a></span>
                    <h1>{props.place}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>

                </div>
            </div>
            <hr className="solid"></hr>
        </div>
    )
}