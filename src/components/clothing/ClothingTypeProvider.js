import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ClothingTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ClothingTypeProvider = (props) => {
    const [clothingTypes, setClothingTypes] = useState([])

    const getClothingTypes = () => {
        return fetch("http://localhost:8088/clothingTypes")
            .then(res => res.json())
            .then(setClothingTypes)
    }


    
    useEffect(() => {
        getClothingTypes()
    }, [])

    useEffect(() => {
        console.log("****  clothing APPLICATION STATE CHANGED  ****")
    }, [clothingTypes])

    return (
        <ClothingTypeContext.Provider value={{
            clothingTypes
        }}>
            {props.children}
        </ClothingTypeContext.Provider>
    )
}