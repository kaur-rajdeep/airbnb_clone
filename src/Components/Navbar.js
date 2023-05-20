import React from "react"
import airbnb_logo from "./Images/airbnb-logo.png"
export default function Navbar(){
    return (
        <nav>
            <img src={airbnb_logo} className="nav--logo" alt="logo"/>
        </nav>
    )
}