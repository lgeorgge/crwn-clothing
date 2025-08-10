import { createContext, useEffect, useReducer, act } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuthentication } from '../utilities/firebase/firebase.util';

export const UserContext = createContext({
    user: null,
    setUser: () => null,
});




const INITIAL_STATE = {
    user: null,
}

export const USER_ACtION_TYPES = {
    SET_USER: 'SET_USER',
}





const userReducer = (state, action) => {
    const { type, payload } = action;

    console.log(`action : type ${type} payload : ${payload}`);
    console.log("dispatched");



    switch (type) {
        case USER_ACtION_TYPES.SET_USER:
            return { ...state, user: payload };
        default:
            throw new Error(`unhandled type ${type} in userReducer`);
    }

}




export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { user } = state;

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACtION_TYPES.SET_USER, payload: user })
    }




    //const [user, setUser] = useState(null);
    const value = { user, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
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





