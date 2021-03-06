import React, { useContext, useState } from "react"
import "./OutfitDash.css"
import { StyleContext } from "../styles/StyleProvider"
import { OutfitContext } from "./OutfitProvider"
import { ClothingOutfitContext } from "./ClothingOutfitProvider"



const OutfitDash = props => {

    

    const { styles } = useContext(StyleContext)
    const { outfits, getOutfits, addOutfit, updateOutfit } = useContext(OutfitContext)
    const { addClothingOutfit, updateClothingOutfit } = useContext(ClothingOutfitContext)
    const [outfit, setOutfits] = useState({})
    const editMode = props.match.params.hasOwnProperty("outfitId")

    

    const [ fullPicimage, setFullPicImage] = useState('')
    const [ loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'fitted')
        setLoading(true)
        const res = await fetch(
           ' https://api.cloudinary.com/v1_1/kmpcldnry/image/upload ', 
           {
               method: 'POST', 
               body: data
           }
        )
        const file = await res.json()

        setFullPicImage(file.secure_url)
        setLoading(false)
    }



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
                styleId: parseInt((outfit.styleId),10),
                userId: parseInt(localStorage.getItem("fitted_user"), 10),
                fullFitPic: fullPicimage
            })
                .then(() => props.history.push("/"))
        } else {
            addOutfit({
                id: outfit.id,
                styleId: parseInt((outfit.styleId),10),
                userId: parseInt(localStorage.getItem("fitted_user"), 10),
                fullFitPic: fullPicimage
            })
            .then((res) => {
                let neededId = res.id
                return neededId})
            .then( (res) =>
             {   addClothingOutfit({
                outfitId: res,
                clothingId: props.topSelect.topId}
                )
               addClothingOutfit({
                outfitId: res,
                clothingId: props.bottomSelect.bottomId}
                )
               addClothingOutfit({
                outfitId: res,
                clothingId: props.shoeSelect.shoeId}
                )
               addClothingOutfit({
                outfitId: res,
                clothingId: props.accessorySelect.accessoryId}
                )
            })
        
            .then(getOutfits).then(
                () => {
                    props.setTopSelect("")
                    props.setBottomSelect("")
                    props.setShoeSelect("")
                    props.setAccessorySelect("")
                }).then(
                () => props.history.push("/"))
        }
        }


return (
    <main className="container--OutfitDashboard">
        <section>
            <div className="outfitSelectorList">
            <div className="clothingTypeSelectors">
            </div>
            <div className="outfitPreview">
                <div className="topPreviewSection">
                <div className="clothingTypeSelectors">

                <button className="topSelector" onClick={() => 
                    props.history.push("/topSelect/1")
                }>
                    Select Top
                </button>
                </div>
                    <div className="clothing--image">
                        <img src={(props.topSelect.image)}/>
                    </div>
                </div>
                <div className="bottomPreview">
                <div className="clothingTypeSelectors">
                    <button className="bottomSelector" onClick={() => 
                        props.history.push("/bottomSelect/2")
                        }>
                    Select Bottom
                    </button>
                </div>
                    <div className="clothing--image">
                        <img src={(props.bottomSelect.image)}/>
                    </div>
                </div>
                <div className="shoePreview">
                <div className="clothingTypeSelectors">
                <button className="shoeSelector" onClick={() => 
                    props.history.push("/shoesSelect/3")
                }>
                    Select Shoe
                    
                </button>
                </div>
                    <div className="clothing--image">
                        <img src={(props.shoeSelect.image)}/>
                    </div>
                </div>
                <div className="accesoryPreview">
                <div className="clothingTypeSelectors">
                <button className="accessorySelectors" onClick={() => 
                    props.history.push("/accessoriesSelect/4")
                }>Select Accessories</button>
                </div>
                    <div className="clothing--image">
                        <img src={(props.accessorySelect.image)}/>
                    </div>
                </div>
            </div>
            </div>
            <div className="saveOutfitSection">
                <div className="saveInputSection">
            <div className="imageUpload">
                <label class="custom-file-upload"> Upload Photo
                <input
                    type="file"
                    name="file"
                    placeholder="upload an image"
                    className="form-control"
                    onChange={uploadImage}
                    />
                </label>
            </div>
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
                
            <button className="saveOutfit form-control" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewOutfit()
                    }}
                > 
                Save Outfit
            </button>
            </div>
            <div className="previewFitPic">
            {loading ? (
                    <h3>Loading...</h3>
                ): (
                    <img className="previewFitPicImg" src={fullPicimage} style={{width: '200px'}}/>
                )}
            </div>
            </div>
        </section>
    </main>
)
}
export default OutfitDash