import React from "react"
import { Route } from "react-router-dom"
import { ClothingProvider } from "./clothing/ClothingProvider"
import AddItemForm from "./addItem/AddItemForm"
import { ClothingTypeProvider } from "./clothing/ClothingTypeProvider"




export default (props) => {
    return (
        <>
           <ClothingProvider>
               <ClothingTypeProvider>
                <Route exact path="/addItems" render={
                    props => <AddItemForm {...props} />
                }/>
                </ClothingTypeProvider>
           </ClothingProvider>
        
        </>
    )
}