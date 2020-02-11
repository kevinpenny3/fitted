import React, { useContext } from "react"
import "./Bottoms.css"
import { ClothingContext } from "../clothing/ClothingProvider"



export default ({ clothing, history, setBottomSelect }) => {

    const { clothings } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
              setBottomSelect({ 
                  image: clothing.itemImage,
                  bottomId: clothing.id 
                })
                   history.push(`/createOutfit`)
                }}>Select Bottom</button>
        
        </div>

)} else {
    return("")
}}
    
    return(
    <section className="bottom">
        <div className="clothing--image">
            <img src={(clothing.itemImage)}></img>
        </div>
        <div className="clothing--color">{clothing.color}</div>
        {activeUserClothing(clothing, history)}
    </section>
)
        }