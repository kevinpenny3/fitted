import React, { useContext } from "react"
import "./Outfit.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { OutfitContext, OutfitProvider } from "./OutfitProvider"
import { ClothingOutfitContext } from "./ClothingOutfitProvider"

export default ({ clothing, outfit, history }) => {

    const { clothingOutfits, updateclothingOutfits } = useContext(ClothingOutfitContext)
    const { deleteOutfit } = useContext(OutfitContext)

    const { deleteClothing } = useContext(ClothingContext)

    const clothingOutfitTarget = clothingOutfits.filter(co => {
        return co.outfitId === outfit.id 
    })
    console.log(clothingOutfitTarget, "clothing target")

    
    return(
    <section className="outfit">
        <div className="outfit--images">
            { clothingOutfitTarget.map(cot => {
                return <img src={(cot.clothing.itemImage)}/>
            })}
        </div>
        <div className="outfitControls">
            <div className="wearButton">
        <button 
          onClick={() => {
                   history.push("/")
                }}
                >
                    Wear It!</button>
        </div>
        <div className="functionButtons">
        <button 
          onClick={() => {
                   history.push("/outfits/")
                }}
                >
                    Edit</button>
            <button 
                onClick={
                () => {
                    deleteOutfit(outfit)
                    .then(() => {
                        history.push("/outfits")            
                    })
                }}
                >
            Delete clothing
            </button>
            </div>
            </div>
    </section>
)
        }
