import React, { useContext } from "react"
import Top from "./Top"
import "./Tops.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"


export default (props) => {
    const { clothings } = useContext(ClothingContext)
    const { ClothingTypes } = useContext(ClothingTypeContext)
    const clothingTypeId = parseInt(props.match.params.ctId)
    
    console.log(clothings)
    console.log(clothingTypeId)

   const foundTops = clothings.filter(clothing => 
        clothingTypeId === clothing.clothingTypeId
        )
        console.log(foundTops)

        return(
            <div className="tops">
                <h1>My Tops</h1>
                <article className="topsList"> {
                    foundTops.map(foundTop => {
                        return <Top key={foundTop.id} clothing={foundTop} />
                    }
                        )
                }
                </article>
            </div>
        )
}