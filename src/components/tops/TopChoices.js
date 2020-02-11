import React, { useContext } from "react"
import "./Tops.css"
import { ClothingContext } from "../clothing/ClothingProvider"

export default ({ clothing, history, setTopSelect }) => {
    const { clothings } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
              setTopSelect(
                  { image: clothing.itemImage,
                    topId: clothing.id 
                    }
                  )
                   history.push(`/createOutfit`)
                }}>Select Top</button>
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