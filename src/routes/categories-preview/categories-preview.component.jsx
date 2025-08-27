import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { categoriesSelector } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {

    // const { categories } = useContext(CategoriesContext);

    const categories = useSelector(categoriesSelector)

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
