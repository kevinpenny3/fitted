import React, { useContext, useState, useEffect } from "react"
import "./AddItem.css"
import { ClothingContext } from "../clothing/ClothingProvider"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"

export default props => {
    const { clothings, addClothing, updateClothing } = useContext(ClothingContext)
    const [clothing, setClothing] = useState({})
    const { clothingTypes } = useContext(ClothingTypeContext)
    const editMode = props.match.params.hasOwnProperty("clothingId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newClothing = Object.assign({}, clothing)
        newClothing[evt.target.name] = evt.target.value
        console.log(newClothing)
        setClothing(newClothing)
    }

    const setDefaults = () => {
        if (editMode) {
            const clothingId = parseInt(props.match.params.clothingId)
            const selectedClothing = clothings.find(c => c.id === clothingId) || {}
            setClothing(selectedClothing)
            console.log(selectedClothing)
        
        }
    }

    useEffect(() => {
        setDefaults()
    }, [clothings])

    const constructNewClothing = () => {
        if (editMode) {
            updateClothing({
                id: clothing.id,
                clothingTypeId: parseInt((clothing.clothingTypeId),10),
                color: clothing.color,
                userId: parseInt(localStorage.getItem("fitted_user"), 10)
            })
                .then(() => props.history.push(`/${clothing.clothingType.type}s/${clothing.clothingTypeId}`))
        } else {
            addClothing({
                clothingTypeId: parseInt((clothing.clothingTypeId),10),
                color: clothing.color,
                userId: parseInt(localStorage.getItem("fitted_user"), 10)
            })
            .then(() => props.history.push("/"))
        }
        }
    


    return (
        <main className="container--addItem">
        <form className="clothingForm">
            <h2 className="clothingForm__title">{editMode ? "Edit Clothing" : "Add Item"}</h2>

            <div className="form-group">
                <label htmlFor="addPhoto">Add Photo</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    defaultValue=""
                    // required
                    autoFocus
                    className="fileUpload"
                    placeholder="image"
                    // proptype="intlin"
                    onChange={handleControlledInputChange}
                    />
            </div>
            <fieldset>

            <div className="form-group">
                <label htmlFor="title">Type</label>
                <select
                    // type="select"
                    id="clothingTypeId"
                    name="clothingTypeId"
                    value = {clothing.clothingTypeId}
                    required
                    autoFocus
                    className="form-control"
                    onChange={handleControlledInputChange}
                    >
                    <option value="0">Clothing Type</option>
                    {clothingTypes.map(ct => (
                        <option key={ct.id} value={ct.id}>
                            {ct.type}
                        </option>
                    ))}
                    </select>
            </div>
                    </fieldset>
                    <fieldset>
                        
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    defaultValue={clothing.color}
                    required
                    className="form-control"
                    proptype="varchar"
                    placeholder="color"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewClothing()
                    }}
                className="btn btn-primary"> {editMode ? "Update Clothing": "Save Item"} </button>
        </form>
        </main>
    )
}