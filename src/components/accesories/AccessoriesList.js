import React, { useContext } from "react"
import Accessories from "./Accessories"
import "./Accessories.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"


export default (props) => {
    const { clothings } = useContext(ClothingContext)
    const { ClothingTypes } = useContext(ClothingTypeContext)
    const clothingTypeId = parseInt(props.match.params.ctId)
    
    console.log(clothings)
    console.log(clothingTypeId)

   const foundAccessories = clothings.filter(clothing => 
        clothingTypeId === clothing.clothingTypeId
        )
        console.log(foundAccessories)

        const userAccessories = foundAccessories.filter(clothing =>
            clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10))
            console.log("found user accessories", userAccessories)

        return(
            <div className="accessories">
                <h1>My Accessories</h1>
                <article className="accessoriesList"> {
                    userAccessories.map(userAccessories => {
                        return <Accessories {...props} key={userAccessories.id} clothing={userAccessories} />
                    }
                        )
                }
                </article>
            </div>
        )
}