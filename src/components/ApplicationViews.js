import React from "react"
import { Route } from "react-router-dom"
import { ClothingProvider } from "./clothing/ClothingProvider"
import AddItemForm from "./addItem/AddItemForm"
import { ClothingTypeProvider } from "./clothing/ClothingTypeProvider"
import ProviderProvider from "./providerProvider/ProviderProvider"
import Dashboard from "./dashboard/Dashboard"
import TopList from "./tops/TopList"




export default (props) => {
    return (
        <>
            <ProviderProvider>
                <Route exact path="/" render={
                    props => <Dashboard {...props} />
                } />

                <Route exact path="/tops/:ctId(\d+)" render={
                    props => <TopList {...props} />
                } />

                <Route exact path="/addItems" render={
                    props => <AddItemForm {...props} />
                } />
            </ProviderProvider>

        </>
    )
}