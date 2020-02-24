import React from "react"
import "./Dashboard.css"
import dressButton from "./dressFitsButton.svg"
import workButton from "./workFitsButton.svg"
import casualButton from "./casualFitsButton.svg"
import topButton from "./topFilterButton.svg"
import bottomButton from "./bottomFilterButton.svg"
import shoeButton from "./shoeFilterButton.svg"
import accessoryButton from "./accessoryFilterButton.svg"
import addItemButton from "./addItemButton.svg"
import createFitButton from "./createOutfitButton.svg"



const Dashboard = props => {
return (
    <main className="container--dashboard">
        <section>
            <div className="creationList">
            <img src={addItemButton} alt="add item Button" className="addItemButton" onClick={() => 
                    props.history.push("/addItems")
                }/>

                <img src={createFitButton} alt="create outfit Button" className="createOutfitButton" onClick={() => 
                    props.history.push("/createOutfit")
                }/>








            </div>

            <div className="filterList">

            {/* <div className="styleFilters">
            <img src={casualButton} alt="casual filter" className="casualFilter" onClick={() => 
                    props.history.push("/outfits/casual")
                }/>

                <img src={workButton} alt="work filter" className="workFilter" onClick={() => 
                    props.history.push("/outfits/businessCasual")
                }/>

                <img src={dressButton} alt="dress Filter" className="dressFilter" onClick={() => 
                    props.history.push("/outfits/dress")
                }/>
            </div> */}
            <div className="clothingTypeFilters">
                <img src={topButton} className="topFilter" onClick={() => 
                    props.history.push("/tops/1")
                }/>

                <img src={bottomButton} className="bottomFilter" onClick={() => 
                    props.history.push("/bottoms/2")
                }/>

                <img src={shoeButton} className="shoeFilter" onClick={() => 
                    props.history.push("/shoes/3")
                }/>

                <img src={accessoryButton} className="accessoryFilter" onClick={() => 
                    props.history.push("/accessories/4")
                }/>
                </div>
            </div>
        </section>
    </main>
)
}
export default Dashboard