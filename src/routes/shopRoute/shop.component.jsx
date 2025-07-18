import {useContext} from "react";
import { ProductsContext } from "../../contexts/productsContext.component";

const Shop =() => {

    const {products} = useContext(ProductsContext);

     return (
        <div>
            {
                products.map((product) => (
                    <div key={product.id}>
                    <h1>{product}</h1>
                    </div>

                )
                
                        

                
                )
            }
        </div>

     )
}

export default Shop; // exporting the component so that it can be used in other files.
