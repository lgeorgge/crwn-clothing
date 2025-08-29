import { compose, legacy_createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

import { rootReducer } from "./rootReducer";
const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};

const middleWares = [logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);
