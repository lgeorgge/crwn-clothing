import { createContext, useEffect, useState } from "react";
import { getCollectionFromDB } from '../utilities/firebase/firebase.util'


export const CategoriesContext = createContext({
    categories: new Map(),
    setCategories: () => { },
});
export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState(new Map());
    const value = { categories };

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCollectionFromDB();
            console.log(categoryMap);
            const myNewMap = new Map(Object.entries(categoryMap))

            setCategories(myNewMap)

        }
        getCategories();

    }, [])










    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}