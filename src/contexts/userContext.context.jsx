import { createContext, useState } from 'react'

export const UserContext = createContext({
    user: null,
    setUser: () => null,
});


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user, setUser };


    return <UserContext.Provider value={value} >{children}</UserContext.Provider>


}





