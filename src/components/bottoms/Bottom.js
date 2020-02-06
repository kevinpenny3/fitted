import React, { useContext } from "react"
import "./Bottoms.css"
import bottom from "./bottomsample.jpg"
import { ClothingContext } from "../clothing/ClothingProvider"



export default ({ clothing, history }) => {
    
    const { deleteClothing } = useContext(ClothingContext)

   return( <section className="bottom">
        <div className="clothing--image">
            <img src={bottom}></img>
        </div>
        <button className="edit--${clothing.id}">Edit</button>
        <button className="delete--${clothing.id}" onClick={
                () => {
                    deleteClothing(clothing)
                        .then(() => {
                            history.push("/bottoms/2")
                        })
                }
            }>Delete</button>
        <button className="filter--${clothing.id}">Filter</button>
    </section>)
}