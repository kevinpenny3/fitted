import React, { useContext } from "react"
import "./Tops.css"
import top from "./topsample.jpg"
import { ClothingContext } from "../clothing/ClothingProvider"

export default ({ clothing, history }) => {

    const { deleteClothing } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
                   history.push(`/addItem/edit/${clothing.id}`)
                }}>Edit</button>
        
            <button onClick={
                () => {
                    deleteClothing(clothing)
                    .then(() => {
                        history.push("/tops/1")            
                    })
                }}>
            Delete clothing
            </button>
            <button className="filter--${clothing.id}">Filter</button>
        
        </div>

)} else {
    return("")
}}
    
    return(
    <section className="top">
        <div className="clothing--image">
            <img src={top}></img>
        </div>
        {activeUserClothing(clothing, history)}
    </section>
)
        }