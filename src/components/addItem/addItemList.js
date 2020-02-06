import React, { useContext } from "react"
import "./addItem.css"
import { ClothingTypeContext } from "../clothing/ClothingTypeProvider"
import { ClothingContext } from "../clothing/ClothingProvider"

export default (props) => {
    const { clothingTypes } = useContext(ClothingTypeContext)
    const { clothings } = useContext(ClothingContext)
    

        return (
            <div className="employees">
                <h1>Employees</h1>
                <button className="createEmployeeButton" onClick={() => props.history.push("/employees/create")}>
                    Add Employee
                </button>
                <article className="employeeList">
                    {
                    employees.map(employee => {
                        const foundedLocation = locations.find(
                            (location) => {
                                return location.id === employee.locationId
                            }
                        )
                        return <Employee key={employee.id} 
                                         location={foundedLocation} 
                                         employee={employee} />
})
}
                </article>
            </div>
        )
}