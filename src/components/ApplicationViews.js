import React from "react"
import { Route } from "react-router-dom"
import { ClothingProvider } from "./clothing/ClothingProvider"
import AddItemForm from "./addItem/AddItemForm"




export default (props) => {
    return (
        <>
           <ClothingProvider>
                <Route exact path="/addItems" render={
                    props => <AddItemForm {...props} />
                }/>
           </ClothingProvider>
        
        </>
    )
}