import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Fitted</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/addItems">Add Items</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/createOutfit">Create Outfit</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/find">Find Outfit</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/closet">View Closet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/logout">Logout</Link>
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
    )
}