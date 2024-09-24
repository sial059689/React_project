import React, { Children } from "react";
import UserContext from "./userContext";


const UserContextProvider = ({Children}) =>{
return{
    <UserContext.Provider>
    {Children}
    <UserContext.Provider/>
}

}