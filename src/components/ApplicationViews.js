import React from "react"
import { Route } from "react-router-dom"
import AddItemForm from "./addItem/AddItemForm"
import ProviderProvider from "./providerProvider/ProviderProvider"
import Dashboard from "./dashboard/Dashboard"
import TopList from "./tops/TopList"
import BottomList from "./bottoms/BottomList"
import ShoeList from "./shoes/ShoeList"
import OutfitDash from "./outfits/OutfitDash"
import TopSelect from "./outfitSelects/TopSelect"
import BottomSelect from "./outfitSelects/BottomSelect"
import ShoeSelect from "./outfitSelects/ShoeSelect"




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

                <Route exact path="/shoes/:ctId(\d+)" render={
                    props => <ShoeList {...props} />
                } />

                <Route exact path="/createOutfit" render={
                    props => <OutfitDash {...props} />
                } />

                <Route exact path="/addItems" render={
                    props => <AddItemForm {...props} />
                } />

                <Route path="/addItems/edit/:clothingId(\d+)" render={
                    props => <AddItemForm {...props} />
                } />

                <Route exact path="/topSelect/:ctId(\d+)" render={
                    props => <TopSelect {...props} />
                } />
                <Route exact path="/bottomSelect/:ctId(\d+)" render={
                    props => <BottomSelect {...props} />
                } />

                <Route exact path="/shoesSelect/:ctId(\d+)" render={
                    props => <ShoeSelect {...props} />
                } />

            </ProviderProvider>

        </>
    )
}