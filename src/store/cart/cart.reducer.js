import { CART_ACTION_TYPES } from "./cart.type";

export const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: new Map(),
};

export function cartReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return { ...state, isCartOpen: payload };
		case CART_ACTION_TYPES.SET_CART_STATE:
			return { ...state, cartItems: payload };

		default:
			return state;
	}
}
