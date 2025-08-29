// @ts-nocheck
import './checkout-item.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext.context';


import { useSelector, useDispatch } from '../../../node_modules/react-redux/dist/react-redux';

import { addItemToCart, removeItemFromCart, decrementItemFromCart } from './../../store/cart/cart.action'

import { selectCartItems, CartCount, selectCartTotal, } from '../../store/cart/cart.selector';


const CheckoutItem = ({ cartItem, quantity }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);







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
                <div className='arrow' onClick={() => { dispatch(decrementItemFromCart(cartItems, cartItem)) }}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => { dispatch(addItemToCart(cartItems, cartItem)) }}>&#10095; </div>

            </span>
            <span className='price'>
                {price}
            </span>
            <div className='remove-button' onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>&#10005;</div>
        </div>
    )

}



export default CheckoutItem;