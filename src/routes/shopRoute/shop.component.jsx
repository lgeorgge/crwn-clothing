import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext.context";
import ProductCard from '../../components/productCard/productCard.component'

import CategoryPreview from "../../components/category-preview/category-preview.component";






import './shop.styles.scss'

const Shop = () => {

    const { categories } = useContext(CategoriesContext);

    return (


        <div className="shop-container">
            {
                Array.from(categories).map(([title, items]) => (
                    <CategoryPreview key={title} title={title} products={items} />
                ))
            }
        </div>



    )
}

export default Shop; // exporting the component so that it can be used in other files.
