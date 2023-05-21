import React from "react"


export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card--image"/>
            <div className = "card--stats"/>
                <img src="./Images/Star.png" alt="small star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.people}) • </span>
                <span className="gray">{props.country}</span>
                <p>{props.title}</p>
                <p><span className="bold">From {props.price} </span> / person</p>
        </div>
    )
}