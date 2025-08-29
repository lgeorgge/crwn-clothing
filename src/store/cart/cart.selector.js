// @ts-nocheck
import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => {
	const items = cart.cartItems;
	if (items instanceof Map) return items;
	if (items && typeof items === "object")
		return new Map(Object.entries(items));
	return new Map();
});

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	Array.from(cartItems).reduce((total, [cartItem, quantity]) => {
		return total + cartItem.price * quantity;
	}, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	Array.from(cartItems).reduce((total, [_, quantity]) => {
		return total + quantity;
	}, 0)
);

// export const CartTotal = Array.from(cartItems).reduce(
// 	(total, [cartItem, quantity]) => {
// 		return total + cartItem.price * quantity;
// 	},
// 	0
// );

// export const CartCount = Array.from(cartItems).length;
