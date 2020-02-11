import React, { useContext } from "react"
import "./Tops.css"
import { ClothingContext } from "../clothing/ClothingProvider"

export default ({ clothing, history }) => {

    const { deleteClothing } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
                   history.push(`/addItems/edit/${clothing.id}`)
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
            <img src={(clothing.itemImage)}></img>
        </div>
        <div className="clothing--color">{clothing.color}</div>
        {activeUserClothing(clothing, history)}
    </section>
)
        }