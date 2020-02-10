import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const OutfitContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OutfitProvider = (props) => {
    const [outfits, setOutfits] = useState([])

    const getOutfits = () => {
        return fetch("http://localhost:8088/outfits")
            .then(res => res.json())
            .then(setOutfits)
    }

    const addOutfit = outfit => {
        return fetch("http://localhost:8088/outfits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(outfit)
        })
            .then(getOutfits)
    }

    const updateOutfit= outfit => {
        return fetch(`http://localhost:8088/outfits/${outfits.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(outfit)
        })
            .then(getOutfits)
    }

    const deleteOutfit = outfit => {
        return fetch(`http://localhost:8088/outfits/${outfits.id}`, {
            method: "DELETE",
        })
            .then(getOutfits)
    }

   
    useEffect(() => {
        getOutfits()
    }, [])

    useEffect(() => {
        console.log("****  outfit APPLICATION STATE CHANGED  ****")
    }, [outfits])

    return (
        <OutfitContext.Provider value={{
            outfits, addOutfit, updateOutfit, deleteOutfit
        }}>
            {props.children}
        </OutfitContext.Provider>
    )
}