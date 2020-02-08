import React, { useContext } from "react"
import Shoe from "./Shoe"
import "./Shoes.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"


export default (props) => {
    const { clothings } = useContext(ClothingContext)
    const { ClothingTypes } = useContext(ClothingTypeContext)
    const clothingTypeId = parseInt(props.match.params.ctId)
    
    console.log(clothings)
    console.log(clothingTypeId)
    debugger
   const foundShoes = clothings.filter(clothing => 
        clothingTypeId === clothing.clothingTypeId
        )
        console.log(foundShoes)

    const userShoes = foundShoes.filter(clothing =>
        clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10))
        console.log("found user shoes", userShoes)

        return(
            <div className="Shoes">
                <h1>My Shoes</h1>
                <article className="shoesList"> {
                    userShoes.map(userShoe => {
                        return <Shoe {...props} key={userShoe.id} clothing={userShoe} />
                    }
                        )
                }
                </article>
            </div>
        )
}