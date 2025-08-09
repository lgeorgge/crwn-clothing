import './checkout-item.styles.jsx'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext.context';


const CheckoutItem = ({ cartItem, quantity }) => {

    const { addItemToCart, decrementItemFromCart,
        removeItemFromCart, decrementNumberOfItems, incrementNumberOfItems } = useContext(CartContext);
    const { name, imageUrl, price } = cartItem;
    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>
                {name}
            </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => { decrementItemFromCart(cartItem); decrementNumberOfItems(); }}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => { addItemToCart(cartItem); incrementNumberOfItems(); }}>&#10095; </div>

            </span>
            <span className='price'>
                {price}
            </span>
            <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )

}



export default CheckoutItem;