import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    const addUser = user => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(getUsers)
    }

  
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        console.log("****  User APPLICATION STATE CHANGED  ****")
    }, [users])

    return (
        <UserContext.Provider value={{
            users, addUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}