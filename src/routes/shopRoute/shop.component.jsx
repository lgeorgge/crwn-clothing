
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getCollectionFromDB } from '../../utilities/firebase/firebase.util';

import { useDispatch } from 'react-redux';


import { setCategories } from '../../store/categories/categories.action';


import './shop.styles.scss'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../Category/category.component';

const Shop = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCollectionFromDB();

            console.log(categoryMap);

            const toBeSet = new Map(
                Array.from(categoryMap.values()).map(({ title, items }) => [title.toLowerCase(), items])
            );
            dispatch(setCategories(toBeSet))

        }
        getCategories();

    }, [dispatch])









    // const { categories } = useContext(CategoriesContext);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />

        </Routes>





    )
}

export default Shop; // exporting the component so that it can be used in other files.
