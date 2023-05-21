import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"


export default function App() {
    return (
        <div>
            <Navbar />
            <Hero/>
            <section className="cards">
            <Card
            img="./Images/card_image1.png"
            rating="5.0"
            people="6"
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price="$136"
            />
            <Card
            img="./Images/card_image2.png"
            rating="5.0"
            people="30"
            country="USA"
            title="Learn wedding photography"
            price="$125"
            />
            <Card
            img="./Images/card_image3.png"
            rating="4.8"
            people="2"
            country="USA"
            title="Group Mountain Biking"
            price="$50"
            />
            </section>
        </div>
    )
}