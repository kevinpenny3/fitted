import React, { useContext } from "react"
import "../shoes/Shoes.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"
import ShoeChoices from "../shoes/ShoeChoices"


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

    const userTops = foundTops.filter(clothing =>
        clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10))
        console.log("found user tops", userTops)

        return(
            <div className="shoes">
                <h1>My Shoes</h1>
                <article className="topsList"> {
                    userTops.map(userTop => {
                        return <ShoeChoices {...props} key={userTop.id} clothing={userTop} />
                    }
                        )
                }
                </article>
            </div>
        )
}