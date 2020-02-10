import { useState } from "react"

export const useOutfitBuilder = () => {
    const [top, setTop] = useState("")
    const [bottom, setbottom] = useState("")
    const [shoes, setShoes] = useState("")
    const [accessory, setAccessory] = useState("")
    const [style, setStyle] = useState("")

    const saveOutfit = () => {
        addOutfit({
            styleId: parseInt((styles.Id),10),
            userId: parseInt(localStorage.getItem("fitted_user"), 10)
        }).then(())
    }

    return {
        setTop, setBottom, setShoes, setAccessory, setStyle
    }


}