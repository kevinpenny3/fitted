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
                <button className="shoeFilter" onClick={() => 
                    props.history.push("/shoes/3")
                }>
                    Shoe Filter
                    
                </button>
                <button className="accessoryFilter" onClick={() => 
                    props.history.push("/accessories/4")
                }>Accessories Filter</button>
            </div>
            <div className="styleFilters">
                <button className="casualFilter" onClick={() => 
                    props.history.push("/outfits/casual")
                }
                
                >Casual</button>
                <button className="bizCasualFilter" onClick={() => 
                    props.history.push("/outfits/businessCasual")
                }
                
                >Business Casual</button>
                <button className="dressFilter" onClick={() => 
                    props.history.push("/outfits/dress")
                }
                
                >Dress</button>
            </div>
            </div>
        </section>
    </main>
)
}
export default Dashboard