import React, { useContext } from "react"
import "./Tops.css"
import top from "./topsample.jpg"
import { ClothingContext } from "../clothing/ClothingProvider"

export default ({ clothing, history }) => {

    const { deleteClothing } = useContext(ClothingContext)

    return(
    <section className="top">
        <div className="clothing--image">
            <img src={top}></img>
        </div>
        <button className="edit--${clothing.id}">Edit</button>
        <button className="delete--${clothing.id}" onClick={
                () => {
                    deleteClothing(clothing)
                        .then(() => {
                            history.push("/tops/1")
                        })
                }
            }>
                Delete
                
            </button>
        <button className="filter--${clothing.id}">Filter</button>
    </section>
)
        }