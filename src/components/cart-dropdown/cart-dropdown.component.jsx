import Button from '../button/Button.component';
import './cart-dropdown.styless.scss';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();





    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {
                    cartItems.size === 0 ?
                        (<p>your cart is empty</p>)
                        :
                        (<div>
                            {Array.from(cartItems).map(([item, quantity]) =>

                                (<CartItem key={item.id} item={item} quantity={quantity} />))}
                        </div>)
                }
                <div>
                </div>

            </div>

            <Button buttonType='inverted' onClick={() => navigate('/checkout')}>Go to checkout</Button>

        </div>
    )

}

export default CartDropdown;