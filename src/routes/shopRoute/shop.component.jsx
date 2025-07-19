import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext.component";
import ProductCard from '../../components/productCard/productCard.component'
import './shop.styles.scss'

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {
                products.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />


                    </div>

                )




                )
            }
        </div>

    )
}

export default Shop; // exporting the component so that it can be used in other files.
