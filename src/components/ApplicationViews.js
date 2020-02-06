import React from "react"
import { Route } from "react-router-dom"
import AddItemForm from "./addItem/AddItemForm"
import ProviderProvider from "./providerProvider/ProviderProvider"
import Dashboard from "./dashboard/Dashboard"
import TopList from "./tops/TopList"
import BottomList from "./bottoms/BottomList"




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

                <Route exact path="/bottoms/:ctId(\d+)" render={
                    props => <BottomList {...props} />
                } />

                <Route exact path="/addItems" render={
                    props => <AddItemForm {...props} />
                } />
            </ProviderProvider>

        </>
    )
}