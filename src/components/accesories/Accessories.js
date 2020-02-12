import React, { useContext } from "react"
import "./Accessories.css"
import { ClothingContext } from "../clothing/ClothingProvider"



export default ({ clothing, history }) => {

    const { deleteClothing } = useContext(ClothingContext)

    return(
    <section className="accessory">
        <div className="clothing--image">
            <img src={(clothing.itemImage)}></img>
        </div>
        <div className="clothing--color">{clothing.color}</div>
        <div> 
          <button onClick={() => {
                   history.push(`/accessories/edit/${clothing.id}`)
                }}>Edit</button>
        
            <button onClick={
                () => {
                    deleteClothing(clothing)
                    .then(() => {
                        history.push("/accessories/4")            
                    })
                }}>
            Delete clothing
            </button>
            <button className="filter--${clothing.id}" onClick={() => {
                   history.push(`/outfits/${clothing.id}`)
                }}>Filter Fits</button>
        
        </div>
    </section>
)
        }