import './category.styles.scss'
import { useParams } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react';
import { CategoriesContext, } from '../../contexts/categoriesContext.context';
import ProductCard from '../../components/productCard/productCard.component';

const Category = () => {

    const { category } = useParams();

    const { categories } = useContext(CategoriesContext);// get the categoriesMap from the context
    const [products, setProducts] = useState(categories.get(category));

    useEffect(
        () => {
            setProducts(categories.get(category));
        }
        ,
        [category, categories]
    );


    return (
        <div className='category-container'>
            {
                products && products.map((product) =>
                    <ProductCard key={product.id} product={product} />
                )
            }
        </div>
    )






}

export default Category