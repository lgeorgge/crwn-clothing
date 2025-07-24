import { createContext, useEffect, useState } from "react";
import CartItem from "../components/cart-item/cart-item.component";

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => { },
        cartItems: new Map(),
        addItemToCart: (itemToBeAdded) => { },
        numberOfItems: 0,
        incrementNumberOfItems: () => { },
        decrementNumberOfItems: () => { },

        decrementItemFromCart: (itemToBeDecremented) => { },
        removeItemFromCart: (itemToBeRemoved) => { },

        cartTotal: 0


    }
);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(new Map());
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        const newCartTotal = Array.from(cartItems).reduce(
            (total, [cartItem, quantity]) => {
                return total + cartItem.price * quantity;
            },
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);



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



    const removeItemFromCart = (itemToBeRemoved) => {
        let quantityToBeRemovedFromCartIcon = 0;

        setCartItems(prevCartItems => {
            const updatedCart = new Map(prevCartItems);

            quantityToBeRemovedFromCartIcon = updatedCart.get(itemToBeRemoved)

            //then delete the item

            updatedCart.delete(itemToBeRemoved);
            return updatedCart;
        })

        setNumberOfItems(previousValue => Math.max(0, previousValue - quantityToBeRemovedFromCartIcon))

    }

    const decrementItemFromCart = (itemToBeDecremented) => {
        setCartItems(prevCartItems => {
            const updatedCart = new Map(prevCartItems);
            const currentQty = updatedCart.get(itemToBeDecremented) || 0;
            if (currentQty === 1) {
                updatedCart.delete(itemToBeDecremented)
            } else {
                updatedCart.set(itemToBeDecremented, currentQty - 1);
            }
            return updatedCart;


        })

    }

    const incrementNumberOfItems = () => {
        setNumberOfItems(previousNumber => previousNumber + 1);
    }
    const decrementNumberOfItems = () => {

        setNumberOfItems(previousNumber => previousNumber === 0 ? 0 : previousNumber - 1);
    }




    const value = {
        isCartOpen, setIsCartOpen, addItemToCart, cartItems, numberOfItems
        , incrementNumberOfItems, removeItemFromCart, decrementItemFromCart,
        decrementNumberOfItems, cartTotal
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

//cartItems.set(itemToBeAdded, cartItems.get(itemToBeAdded) + 1)