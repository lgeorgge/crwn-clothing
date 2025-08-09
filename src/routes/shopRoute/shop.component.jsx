
import { Route, Routes } from 'react-router-dom';






import './shop.styles.scss'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../Category/category.component';

const Shop = () => {

    // const { categories } = useContext(CategoriesContext);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />

        </Routes>





    )
}

export default Shop; // exporting the component so that it can be used in other files.
