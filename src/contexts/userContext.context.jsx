import { createContext, useState ,useEffect} from 'react'
import { onAuthStateChangedListener , createUserDocumentFromAuthentication} from '../utilities/firebase/firebase.util';

export const UserContext = createContext({
    user: null,
    setUser: () => null,
});


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user, setUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setUser(user);
            console.log(user);
            if (user) {
                createUserDocumentFromAuthentication(user);
            }
        });

        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
        



    return <UserContext.Provider value={value} >{children}</UserContext.Provider>


}





