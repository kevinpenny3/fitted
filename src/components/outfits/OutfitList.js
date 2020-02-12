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
    const filteredMode = props.match.params.hasOwnProperty("clothingId")


    console.log(outfits)

    let userOutfits = []

    
        if(filteredMode)
        { 
            const clothingId = parseInt(props.match.params.clothingId)
            const filteredClothingOutfits = clothingOutfits.filter(co =>
                co.clothingId === clothingId)
                
            filteredClothingOutfits.forEach(co => {
                let outfit = outfits.find(outfit =>
                    co.outfitId === outfit.id)
                    userOutfits.push(outfit)})

            }else{

            userOutfits = outfits.filter(outfit =>
                outfit.userId === parseInt(localStorage.getItem("fitted_user"), 10))

        }

    console.log(userOutfits, "user outfits")
    


    // const userOutfits = outfits.filter(outfit =>
    //     outfit.userId === parseInt(localStorage.getItem("fitted_user"), 10))
    //     console.log("found user outfits", userOutfits)
    //     console.log(outfits)
    //     console.log(clothingOutfits)

        return(
            <div className="userOutfits">
                <h1>My Outfits</h1>
                <div className="styleFilters">
                <button className="casualFilter" onClick={() => 
                    props.history.push("/outfits/casual")
                }
                
                >Casual</button>
                <button className="bizCasualFilter" onClick={() => 
                    props.history.push("/outfits/businessCasual")
                }
                
                >Business Casual</button>
                <button className="dressFilter" onClick={() => 
                    props.history.push("/outfits/dress")
                }
                
                >Dress</button>
            </div>
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