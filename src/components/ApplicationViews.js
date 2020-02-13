import React, { useState } from "react"
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
import AccessoriesList from "./accesories/AccessoriesList"
import AccessorySelect from "./outfitSelects/AccessorySelect"
import OutfitList from "./outfits/OutfitList"
import CasualFilter from "./styles/CasualFilter"
import BizCasualFilter from "./styles/BizCasualFilter"
import DressFilter from "./styles/DressFilter"




export default (props) => {
    const [topSelect, setTopSelect] = useState("")
    const [bottomSelect, setBottomSelect] = useState("")
    const [shoeSelect, setShoeSelect] = useState("")
    const [accessorySelect, setAccessorySelect] = useState("")



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
                <Route exact path="/accessories/:ctId(\d+)" render={
                    props => <AccessoriesList {...props} />
                } />

                <Route exact path="/createOutfit" render={
                    props => <OutfitDash {...props} topSelect={topSelect} setTopSelect={setTopSelect} bottomSelect={bottomSelect} setBottomSelect={setBottomSelect} shoeSelect={shoeSelect} setShoeSelect={setShoeSelect} accessorySelect={accessorySelect} setAccessorySelect={setAccessorySelect} />
                } />

                <Route exact path="/addItems" render={
                    props => <AddItemForm {...props} />
                } />

                <Route exact path="/addItems/edit/:clothingId(\d+)" render={
                    props => <AddItemForm {...props} />
                } />

                <Route exact path="/topSelect/:ctId(\d+)" render={
                    props => <TopSelect {...props} setTopSelect={setTopSelect} />
                } />
                <Route exact path="/bottomSelect/:ctId(\d+)" render={
                    props => <BottomSelect {...props} setBottomSelect={setBottomSelect} />
                } />

                <Route exact path="/shoesSelect/:ctId(\d+)" render={
                    props => <ShoeSelect {...props} setShoeSelect={setShoeSelect} />
                } />
                <Route exact path="/accessoriesSelect/:ctId(\d+)" render={
                    props => <AccessorySelect {...props} setAccessorySelect={setAccessorySelect} />
                } />

                <Route exact path="/outfits" render={
                    props => <OutfitList {...props} />
                } />
                <Route exact path="/outfits/casual" render={
                    props => <CasualFilter {...props} />
                } />
                <Route exact path="/outfits/businessCasual" render={
                    props => <BizCasualFilter {...props} />
                } />
                <Route exact path="/outfits/dress" render={
                    props => <DressFilter {...props} />
                } />
                <Route exact path="/outfits/:clothingId(\d+)" render={
                    props => <OutfitList {...props} />
                } />

            </ProviderProvider>

        </>
    )
}