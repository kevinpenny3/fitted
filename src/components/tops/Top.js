import React from "react"
import "./Tops.css"
import top from "./topsample.jpg"

export default ({ clothing, clothingType }) => (
    <section className="top">
        <div className="clothing--image">
            <img src={top}></img>
        </div>
        <button className="edit--${clothing.id}">Edit</button>
        <button className="delete--${clothing.id}">Delete</button>
        <button className="filter--${clothing.id}">Filter</button>
    </section>
)