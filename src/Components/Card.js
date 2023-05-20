import React from "react"
import card_image from "./Images/card_image.png"
import Star from "./Images/Star.png"

export default function Card(){
    return(
        <div className="card">
            <img src={card_image} className="card--image"/>
            <div className = "card--stats"/>
                <img src={Star} alt="small star" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136 </span> / person</p>
        </div>
    )
}