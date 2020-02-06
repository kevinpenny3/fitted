import React from "react"
import "./Dashboard.css"

const Dashboard = props => {
return (
    <main className="container--dashboard">
        <section>
            <div className="favoritesList">
                Favorites
            </div>
            <div className="filterList">
            <div className="clothingTypeFilters">
                <button className="topFilter" onClick={() => 
                    props.history.push("/tops/1")
                }>
                    Top Filter
                </button>
                <button className="bottomFilter" onClick={() => 
                    props.history.push("/bottoms/2")
                }>
                    Bottom Filter
                </button>
                <button className="shoeFilter">Shoe Filter</button>
                <button className="accesroyFilter">Accessories Filter</button>
            </div>
            <div className="styleFilters">
                <button className="casualFilter">Casual</button>
                <button className="bizCasualFilter">Business Casual</button>
                <button className="dressFilter">Dress</button>
            </div>
            </div>
        </section>
    </main>
)
}
export default Dashboard