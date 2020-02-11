import React, { useContext, useState } from "react"
import "./OutfitDash.css"
import { StyleContext } from "../styles/StyleProvider"
import { OutfitContext } from "./OutfitProvider"



const OutfitDash = props => {

    

    const { styles } = useContext(StyleContext)
    const { outfits, addOutfit, updateOutfit } = useContext(OutfitContext)
    const [outfit, setOutfits] = useState({})
    const editMode = props.match.params.hasOwnProperty("outfitId")

    console.log(props.topSelect)
    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newOutfit = Object.assign({}, outfit)
        newOutfit[evt.target.name] = evt.target.value
        console.log(newOutfit)
        setOutfits(newOutfit)
    }

    const setDefaults = () => {
        if (editMode) {
            const outfitId = parseInt(props.match.params.outfitId)
            const selectedOutfit = outfit.find(o => o.id === outfitId) || {}
            setOutfits(selectedOutfit)
            console.log(selectedOutfit)
        
        }
    }

    const constructNewOutfit = () => {
        if (editMode) {
            updateOutfit({
                id: outfit.id,
                styleId: parseInt((styles.id),10),
                userId: parseInt(localStorage.getItem("fitted_user"), 10)
            })
                .then(() => props.history.push("/"))
        } else {
            addOutfit({
                id: outfit.id,
                styleId: parseInt((styles.id),10),
                userId: parseInt(localStorage.getItem("fitted_user"), 10)
            })
            .then(() => props.history.push("/"))
        }
        }


return (
    <main className="container--OutfitDashboard">
        <section>
            <div className="outfitSelectorList">
            <div className="clothingTypeSelectors">
                <button className="topSelector" onClick={() => 
                    props.history.push("/topSelect/1")
                }>
                    Select Top
                </button>
                <button className="bottomSelector" onClick={() => 
                    props.history.push("/bottomSelect/2")
                }>
                    Select Bottom
                </button>
                <button className="shoeSelector" onClick={() => 
                    props.history.push("/shoesSelect/3")
                }>
                    Select Shoe
                    
                </button>
                <button className="accessorySelectors" onClick={() => 
                    props.history.push("/accessoriesSelect/4")
                }>Select Accessories</button>
            </div>
            <div className="outfitPreview">
                <div className="topPreview">
                    Top Selected
                    <div className="clothing--image">
                        <img src={props.topSelect}/>
                    </div>
                </div>
                <div className="bottomPreview">
                    Bottom Selected
                    <div className="clothing--image">
                        <img src={props.bottomSelect}></img>
                    </div>
                </div>
                <div className="shoePreview">
                    Shoes Selected
                    <div className="clothing--image">
                        <img src={props.shoeSelect}></img>
                    </div>
                </div>
                <div className="accesoryPreview">
                    Accesories Selected
                    <div className="clothing--image">
                        <img src={props.accessorySelect}></img>
                    </div>
                </div>
            </div>
            </div>
            <div className="saveOutfitSection">
                <select
                    id="styleId"
                    name="styleId"
                    value = {styles.id}
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
            <button className="saveOutfit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewOutfit()
                    }}
                > 
                Save Outfit
            </button>
            </div>
        </section>
    </main>
)
}
export default OutfitDash