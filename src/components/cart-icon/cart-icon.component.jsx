
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext.context';
import { useContext } from 'react';

import './cart-icon.styles.scss';


import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


import { useDispatch, useSelector } from '../../../node_modules/react-redux/dist/react-redux';





const CartIcon = () => {

    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount)


    // const { isCartOpen, setIsCartOpen, numberOfItems } = useContext(CartContext);



    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <div className='cart-icon-container' onClick={() => toggleIsCartOpen()}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;