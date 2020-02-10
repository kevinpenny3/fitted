import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ClothingContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ClothingProvider = (props) => {
    const [clothings, setClothings] = useState([])

    const getClothings = () => {
        return fetch("http://localhost:8088/clothing?_expand=clothingType")
            .then(res => res.json())
            .then(setClothings)
    }

    const addClothing = clothing => {
        return fetch("http://localhost:8088/clothing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clothing)
        })
            .then(getClothings)
    }

    const updateClothing= clothing => {
        return fetch(`http://localhost:8088/clothing/${clothing.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clothing)
        })
            .then(getClothings)
    }

    const deleteClothing = clothing => {
        return fetch(`http://localhost:8088/clothing/${clothing.id}`, {
            method: "DELETE",
        })
            .then(getClothings)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getClothings()
    }, [])

    useEffect(() => {
        console.log("****  clothing APPLICATION STATE CHANGED  ****")
    }, [clothings])

    return (
        <ClothingContext.Provider value={{
            clothings, addClothing, updateClothing, deleteClothing
        }}>
            {props.children}
        </ClothingContext.Provider>
    )
}