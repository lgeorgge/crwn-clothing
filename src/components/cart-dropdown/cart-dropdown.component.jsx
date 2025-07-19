import Button from '../button/Button.component';
import './cart-dropdown.styless.scss';

const CartDropdown = () => {

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>

            </div>

            <Button buttonType='inverted'>Go to checkout</Button>

        </div>
    )

}

export default CartDropdown;