import './productCard.styles.scss';
import Button from '../button/Button.component';

import { addItemToCart } from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';




const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}$</span>
            </div>
            <Button
                buttonType="inverted"
                onClick={() => {
                    addProductToCart();
                }}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard; // exporting the component so that it can be used in other files.