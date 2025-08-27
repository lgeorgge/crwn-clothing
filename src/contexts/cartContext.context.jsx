import { createContext, useEffect, useReducer } from "react";
import CartItem from "../components/cart-item/cart-item.component";
import { createAction } from "../utilities/reducers/reducer.utils";


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


const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_STATE: 'SET_CART_STATE',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: new Map(),
    numberOfItems: 0,
    cartTotal: 0,
};

function cartReducer(state, action) {
    switch (action.type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return { ...state, isCartOpen: action.payload };
        case CART_ACTION_TYPES.SET_CART_STATE:
            return { ...state, ...action.payload };
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return { ...state, cartTotal: action.payload };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, numberOfItems, cartTotal } = state;

    useEffect(() => {
        const newCartTotal = Array.from(cartItems).reduce(
            (total, [cartItem, quantity]) => {
                return total + cartItem.price * quantity;
            },
            0
        );
        dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: newCartTotal });
    }, [cartItems]);

    const setIsCartOpen = (bool) => {
        dispatch(createAction(
            CART_ACTION_TYPES.SET_IS_CART_OPEN, bool
        ))
    };

    const addItemToCart = (itemToBeAdded) => {
        const updatedCart = new Map(cartItems);
        const currentQty = updatedCart.get(itemToBeAdded) || 0;
        updatedCart.set(itemToBeAdded, currentQty + 1);
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATE,
            payload: {
                cartItems: updatedCart,
                numberOfItems: numberOfItems + 1,
            },
        });
    };

    const removeItemFromCart = (itemToBeRemoved) => {
        const updatedCart = new Map(cartItems);
        const quantityToBeRemoved = updatedCart.get(itemToBeRemoved) || 0;
        updatedCart.delete(itemToBeRemoved);
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATE,
            payload: {
                cartItems: updatedCart,
                numberOfItems: Math.max(0, numberOfItems - quantityToBeRemoved),
            },
        });
    };

    const decrementItemFromCart = (itemToBeDecremented) => {
        const updatedCart = new Map(cartItems);
        const currentQty = updatedCart.get(itemToBeDecremented) || 0;
        if (currentQty === 1) {
            updatedCart.delete(itemToBeDecremented);
        } else if (currentQty > 1) {
            updatedCart.set(itemToBeDecremented, currentQty - 1);
        }
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATE,
            payload: {
                cartItems: updatedCart,
                numberOfItems: numberOfItems > 0 ? numberOfItems - 1 : 0,
            },
        });
    };

    const incrementNumberOfItems = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATE,
            payload: {
                numberOfItems: numberOfItems + 1,
            },
        });
    };

    const decrementNumberOfItems = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATE,
            payload: {
                numberOfItems: numberOfItems === 0 ? 0 : numberOfItems - 1,
            },
        });
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        numberOfItems,
        incrementNumberOfItems,
        removeItemFromCart,
        decrementItemFromCart,
        decrementNumberOfItems,
        cartTotal,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

//cartItems.set(itemToBeAdded, cartItems.get(itemToBeAdded) + 1)