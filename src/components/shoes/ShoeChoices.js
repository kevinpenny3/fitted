import React, { useContext } from "react"
import "./Shoes.css"
import { ClothingContext } from "../clothing/ClothingProvider"

export default ({ clothing, history, setShoeSelect }) => {
    const { clothings } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
              setShoeSelect(clothing.itemImage)
                   history.push(`/createOutfit`)
                }}>Select Shoes</button>
        </div>

)} else {
    return("")
}}
    
    return(
    <section className="top">
        <div className="clothing--image">
            <img src={require (`./${clothing.itemImage}`)}></img>
        </div>
        <div className="clothing--color">{clothing.color}</div>
        {activeUserClothing(clothing, history)}
    </section>
)
        }