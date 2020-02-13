import React, { useContext } from "react"
import "./Outfit.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { OutfitContext, OutfitProvider } from "./OutfitProvider"
import { ClothingOutfitContext } from "./ClothingOutfitProvider"

export default ({ clothing, outfit, history }) => {

    const { clothingOutfits, updateclothingOutfits } = useContext(ClothingOutfitContext)
    const { deleteOutfit, patchOutfit } = useContext(OutfitContext)

    const { deleteClothing } = useContext(ClothingContext)

    const clothingOutfitTarget = clothingOutfits.filter(co => {
        return co.outfitId === outfit.id 
    })

    var options = { year: "numeric", month:"numeric", day: "numeric"}
    let todayDate = new Date();
    let formatedDate = todayDate.toLocaleDateString("en-US", options);
    let [useDate, foo] = formatedDate.split(",");


    if (outfit.fullFitPic !== "") {

        return (
            <section className="outfit">
                <div className="fullFitPic">
                    <img src={(outfit.fullFitPic)}/>
                </div>
                <div className="outfitControls">
                    <div className="wearButton">
                        <button 
                            onClick={() => {
                                const recentlyWorn = {
                                    id: outfit.id,
                                    dateWorn: useDate
                                }
                                patchOutfit(recentlyWorn).then(history.push("/"))
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
                            onClick={() => {
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
                )}else {

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
                                const recentlyWorn = {
                                    id: outfit.id,
                                    dateWorn: useDate
                                }
                                patchOutfit(recentlyWorn).then(history.push("/"))
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
    }

