import React from "react";
import { FirstName, LastName } from "./App";

function CompC() {
    return (
        <>
        <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return  <h1>My First Name :{fname} <br/> My Last Name :{lname}</h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default CompC;