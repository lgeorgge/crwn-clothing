import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const { categories } = useContext(CategoriesContext);

    return (


        <>
            {
                Array.from(categories).map(([title, items]) => (
                    <CategoryPreview key={title} title={title} products={items} />
                ))
            }
        </>



    )
}

export default CategoriesPreview; // exporting the component so that it can be used in other files.
