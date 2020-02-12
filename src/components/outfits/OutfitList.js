import React, { useContext } from "react"
import "./Outfit.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"
import { OutfitContext } from "./OutfitProvider"
import { ClothingOutfitContext } from "./ClothingOutfitProvider"
import Outfit from "./Outfit"


export default (props) => {
    const { clothings } = useContext(ClothingContext)
    const { ClothingTypes } = useContext(ClothingTypeContext)
    const { outfits } = useContext(OutfitContext)
    const { clothingOutfits } = useContext(ClothingOutfitContext)

    console.log(outfits)



    const userOutfits = outfits.filter(outfit =>
        outfit.userId === parseInt(localStorage.getItem("fitted_user"), 10))
        console.log("found user outfits", userOutfits)
        console.log(outfits)
        console.log(clothingOutfits)

        return(
            <div className="userOutfits">
                <h1>My Outfits</h1>
                <article className="outfitList">
                     {
                    userOutfits.map(userOutfit => {
                        return <Outfit {...props} key={userOutfit.id} outfit={userOutfit} />
                    }
                        )
                }
                </article>
            </div>
        )
}