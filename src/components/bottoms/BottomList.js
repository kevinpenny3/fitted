import React, { useContext } from "react"
import Bottom from "./Bottom"
import "./Bottoms.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"


export default (props) => {
    const { clothings } = useContext(ClothingContext)
    const { ClothingTypes } = useContext(ClothingTypeContext)
    const clothingTypeId = parseInt(props.match.params.ctId)
    
    console.log(clothings)
    console.log(clothingTypeId)

   const foundBottoms = clothings.filter(clothing => 
        clothingTypeId === clothing.clothingTypeId
        )
        console.log(foundBottoms)

        return(
            <div className="bottoms">
                <h1>My Bottoms</h1>
                <article className="bottomsList"> {
                    foundBottoms.map(foundBottom => {
                        return <Bottom {...props} key={foundBottom.id} clothing={foundBottom} />
                    }
                        )
                }
                </article>
            </div>
        )
}