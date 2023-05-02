import useHooks from 'hooks/hooks';
import React, { createContext, useState } from 'react'
import userLogin from 'services/user';

const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    async function getUser(email, password){
        const response = await userLogin();
        const users = response.find(item => item.Credencials.Email === email && item.Credencials.Password === password);
        setUser(users);
    }
    
    return (
        <UserContext.Provider value={{signed: !!user, user, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
