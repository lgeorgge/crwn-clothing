import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cartContext.context";
import CartItem from "../../components/cart-item/cart-item.component";






const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext);








    return (
        <div className="checkout">
            <div>
                this is checkout
            </div>
            {
                cartItems.size === 0 ?
                    (<p>your cart is empty</p>)
                    :
                    (<div>
                        {Array.from(cartItems).map(([item, quantity]) =>
                            <div key={item.id}>
                                <h2>{item.name}</h2>
                                <h1>-</h1>
                                quantity: {quantity}
                                <h1 onClick={() => addItemToCart(item)}>+</h1>
                            </div>
                        )}
                    </div>)
            }

        </div>
    )
}


export default Checkout;