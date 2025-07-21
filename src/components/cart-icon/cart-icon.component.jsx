
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext.context';
import { useContext } from 'react';

import './cart-icon.styles.scss';






const CartIcon = () => {


    const { isCartOpen, setIsCartOpen, numberOfItems } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{numberOfItems}</span>
        </div>
    )
}

export default CartIcon;