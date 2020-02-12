import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ClothingOutfitContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ClothingOutfitProvider = (props) => {
    const [clothingOutfits, setClothingOutfits] = useState([])

    const getClothingOutfits = () => {
        return fetch("http://localhost:8088/clothingOutfits?_expand=clothing")
            .then(res => res.json())
            .then(setClothingOutfits)
    }

    const addClothingOutfit = clothingOutfit => {
        return fetch("http://localhost:8088/clothingOutfits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clothingOutfit)
        })
            .then(getClothingOutfits)
    }

    const updateClothingOutfit= clothingOutfit => {
        return fetch(`http://localhost:8088/clothingOutfits/${clothingOutfits.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clothingOutfit)
        })
            .then(getClothingOutfits)
    }

    const deleteClothingOutfit = clothingOutfit => {
        return fetch(`http://localhost:8088/clothingOutfits/${clothingOutfits.id}`, {
            method: "DELETE",
        })
            .then(getClothingOutfits)
    }

    
    useEffect(() => {
        getClothingOutfits()
    }, [])

    useEffect(() => {
        console.log("****  clothingOutfit APPLICATION STATE CHANGED  ****")
    }, [clothingOutfits])

    return (
        <ClothingOutfitContext.Provider value={{
            clothingOutfits, addClothingOutfit, updateClothingOutfit, deleteClothingOutfit
        }}>
            {props.children}
        </ClothingOutfitContext.Provider>
    )
}