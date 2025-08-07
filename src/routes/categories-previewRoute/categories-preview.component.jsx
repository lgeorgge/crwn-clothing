import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext.context";
import ProductCard from '../../components/productCard/productCard.component'




const CategoriesPreview = () => {

    const { categories } = useContext(CategoriesContext);
    return (
        <div>
            {
                Array.from(categories).map(([title, items]) => {
                    return (
                        <div key={title}>
                            {console.log(title)}
                            <h2>{title}</h2>
                            <div className="products-container">
                                {
                                    items.map(item => {
                                        return (
                                            <ProductCard key={item.id} product={item} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>



    )
}

export default CategoriesPreview; // exporting the component so that it can be used in other files.
