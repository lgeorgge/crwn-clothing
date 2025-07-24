import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext.context";
//import CartItem from "../../components/cart-item/cart-item.component";
import Button from "../../components/button/Button.component";
import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="checkout-container">
            {
                cartItems.size === 0 ?
                    (<p>your cart is empty</p>)
                    :
                    <>
                        <div className="checkout-header">
                            <div className="header-block"><span>Product</span></div>
                            <div className="header-block"><span>Description</span> </div>
                            <div className="header-block"> <span>Quantity</span></div>
                            <div className="header-block"><span>Price</span> </div>
                            <div className="header-block"><span>Remove</span> </div>

                        </div>
                        {Array.from(cartItems).map(([item, quantity]) =>
                            (<CheckoutItem key={item.id} cartItem={item} quantity={quantity} />))
                        }

                        <div className="total">Total is : $</div>

                    </>
            }




















        </div>
    )
}

export default Checkout;
