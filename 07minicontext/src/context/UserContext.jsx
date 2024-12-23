import React, { createContext, useContext } from 'react'


export const DataContext = createContext()



const UserContext = ({ children }) => {

const username = "Wanted to become a developer"

    return (
        <div>
            <DataContext.Provider value={username}>

                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext