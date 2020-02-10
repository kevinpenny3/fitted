import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const StyleContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const StyleProvider = (props) => {
    const [styles, setStyles] = useState([])

    const getStyles = () => {
        return fetch("http://localhost:8088/styles")
            .then(res => res.json())
            .then(setStyles)
    }


    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getStyles()
    }, [])

    useEffect(() => {
        console.log("****  clothing APPLICATION STATE CHANGED  ****")
    }, [styles])

    return (
        <StyleContext.Provider value={{
            styles
        }}>
            {props.children}
        </StyleContext.Provider>
    )
}