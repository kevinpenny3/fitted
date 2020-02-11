import React, { useContext } from "react"
import "./Accessories.css"
import { ClothingContext } from "../clothing/ClothingProvider"




export default ({ clothing, history, setAccessorySelect }) => {

    const { clothings } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
              setAccessorySelect(clothing.itemImage)
                   history.push(`/createOutfit`)
                }}>Select Accessory</button>
        
        </div>

)} else {
    return("")
}}
    
    return(
    <section className="accessory">
        <div className="clothing--image">
            <img src={require (`./${clothing.itemImage}`)}></img>
        </div>
        <div className="clothing--color">{clothing.color}</div>
        {activeUserClothing(clothing, history)}
    </section>
)
        }