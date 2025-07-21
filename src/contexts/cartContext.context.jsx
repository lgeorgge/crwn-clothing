import { createContext, useState } from "react";
import CartItem from "../components/cart-item/cart-item.component";

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => { },
        cartItems: new Map(),
        addItemToCart: (itemToBeAdded) => { },
        numberOfItems: 0,
        incrementNumberOfItems: () => { },

    }
);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(new Map());
    const [numberOfItems, setNumberOfItems] = useState(0);


    /**
     * 
     * @param {Map} CartItems
     * @returns {void}
     */

    const addItemToCart = (itemToBeAdded) => {
        setCartItems(prevCartItems => {
            const updatedCart = new Map(prevCartItems);
            const currentQty = updatedCart.get(itemToBeAdded) || 0;
            updatedCart.set(itemToBeAdded, currentQty + 1);
            return updatedCart;
        });
    };

    const incrementNumberOfItems = () => {
        setNumberOfItems(previousNumber => previousNumber + 1);
    }




    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, numberOfItems, incrementNumberOfItems }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

//cartItems.set(itemToBeAdded, cartItems.get(itemToBeAdded) + 1)