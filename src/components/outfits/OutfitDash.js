import React, { useContext } from "react"
import "./OutfitDash.css"
import { StyleContext } from "../styles/StyleProvider"
import { OutfitContext } from "./OutfitProvider"



const OutfitDash = props => {

    const { styles } = useContext(StyleContext)
    const { outfit, setOutfit } = useContext(OutfitContext)

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newOutfit = Object.assign({}, outfit)
        newOutfit[evt.target.name] = evt.target.value
        console.log(newOutfit)
        setOutfit(newOutfit)
    }


return (
    <main className="container--OutfitDashboard">
        <section>
            <div className="outfitSelectorList">
            <div className="clothingTypeSelectors">
                <button className="topSelector" onClick={() => 
                    props.history.push("/tops/1")
                }>
                    Select Top
                </button>
                <button className="bottomSelector" onClick={() => 
                    props.history.push("/bottoms/2")
                }>
                    Select Bottom
                </button>
                <button className="shoeSelector" onClick={() => 
                    props.history.push("/shoes/3")
                }>
                    Select Shoe
                    
                </button>
                <button className="accessorySelectors">Select Accessories</button>
            </div>
            <div className="outfitPreview">
                <div className="topPreview">Top Selected</div>
                <div className="bottomPreview">Bottom Selected</div>
                <div className="shoePreview">Shoes Selected</div>
                <div className="accesoryPreview">Accesories Selected</div>
            </div>
            </div>
            <div className="saveOutfitSection">
                <select
                    id="styleId"
                    name="styleId"
                    value = {styles.styleId}
                    required
                    autoFocus
                    className="form-control"
                    onChange={handleControlledInputChange}
                    >
                    <option value="0">Style Type</option>
                    {styles.map(s => (
                        <option key={s.id} value={s.id}>
                            {s.styleType}
                        </option>
                    ))}
                </select>
            <button className="saveOutfit" onClick={() => 
                    props.history.push("/")
                }> 
                Save Outfit
            </button>
            </div>
        </section>
    </main>
)
}
export default OutfitDash