import React from "react"
import { Link } from "react-router-dom"
import "./nav.css"
import logo from "./fittedNavBar.png"

export default (props) => {
    return (
        <div className="navbar">
            <div className="navBarLogo">
                <img src={logo} alt="logo"></img>
            </div>
            <ul className="navbarList">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/addItems">Add Items</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/createOutfit">Create Fit</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/find">Find Fit</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/closet">View Closet</Link>
            </li>
        


{
    localStorage.getItem("fitted_user")
        ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("fitted_user")
                    props.history.push("/")
                }}
            >Logout</Link>
        </li>
        : ""
}
        </ul>
        </div>
    )
}