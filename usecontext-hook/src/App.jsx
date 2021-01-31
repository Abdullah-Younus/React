import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();




function Parent() {
    return (
        <>
            <FirstName.Provider value={"Abdullah"}>
                <LastName.Provider value={"Khan"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>

        </>
    )
}


export default Parent;
export {FirstName,LastName}
