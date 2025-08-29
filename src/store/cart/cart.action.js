import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utilities/reducers/reducer.utils";

export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

//******************************************** */

export const addItemToCart = (cartItems, itemToBeAdded) => {
	const updatedCart = new Map(cartItems);
	const currentQty = updatedCart.get(itemToBeAdded) || 0;
	updatedCart.set(itemToBeAdded, currentQty + 1);

	return createAction(CART_ACTION_TYPES.SET_CART_STATE, updatedCart);
};

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
	const updatedCart = new Map(cartItems);
	const quantityToBeRemoved = updatedCart.get(itemToBeRemoved) || 0;
	updatedCart.delete(itemToBeRemoved);
	return createAction(CART_ACTION_TYPES.SET_CART_STATE, updatedCart);
};

export const decrementItemFromCart = (cartItems, itemToBeDecremented) => {
	const updatedCart = new Map(cartItems);
	const currentQty = updatedCart.get(itemToBeDecremented) || 0;
	if (currentQty === 1) {
		updatedCart.delete(itemToBeDecremented);
	} else if (currentQty > 1) {
		updatedCart.set(itemToBeDecremented, currentQty - 1);
	}
	return createAction(CART_ACTION_TYPES.SET_CART_STATE, updatedCart);
};
