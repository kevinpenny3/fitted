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

        const userBottoms = foundBottoms.filter(clothing =>
            clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10))
            console.log("found user bottoms", userBottoms)

        return(
            <div className="bottoms">
                <h1>My Bottoms</h1>
                <article className="bottomsList"> {
                    userBottoms.map(userBottom => {
                        return <Bottom {...props} key={userBottom.id} clothing={userBottom} />
                    }
                        )
                }
                </article>
            </div>
        )
}