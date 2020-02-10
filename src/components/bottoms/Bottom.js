import React, { useContext } from "react"
import "./Bottoms.css"
import bottom from "./bottomsample.jpg"
import { ClothingContext } from "../clothing/ClothingProvider"



export default ({ clothing, history }) => {

    const { deleteClothing } = useContext(ClothingContext)

    const activeUserClothing = (clothing, history) => {
        
        if(clothing.userId === parseInt(localStorage.getItem("fitted_user"), 10)){
        return(
        
        <div> 
          <button onClick={() => {
                   history.push(`/addItems/edit/${clothing.id}`)
                }}>Edit</button>
        
            <button onClick={
                () => {
                    deleteClothing(clothing)
                    .then(() => {
                        history.push("/bottoms/2")            
                    })
                }}>
            Delete clothing
            </button>
            <button className="filter--${clothing.id}">Filter</button>
        
        </div>

)} else {
    return("")
}}
    
    return(
    <section className="bottom">
        <div className="clothing--image">
            <img src={bottom}></img>
        </div>
        {activeUserClothing(clothing, history)}
    </section>
)
        }