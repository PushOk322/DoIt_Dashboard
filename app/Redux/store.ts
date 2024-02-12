"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import categoryReducer from "./slice/category/categorySlice";
import usersReducer from "./slice/users/usersSlice";
import recipesReducer from "./slice/recipes/recipesSlice";
import cartsReducer from "./slice/carts/cartsSlice";
import postsReducer from "./slice/posts/postsSlice";
import productsReducer from "./slice/products/productsSlice";
import sortReducer from "./slice/sort/sortSlice";
import editReducer from "./slice/edit/editSlice";

// const createNoopStorage = () => {
// 	return {
// 		getItem(_key: any) {
// 			return Promise.resolve(null);
// 		},
// 		setItem(_key: any, value: any) {
// 			return Promise.resolve(value);
// 		},
// 		removeItem(_key: any) {
// 			return Promise.resolve();
// 		}
// 	};
// };
// const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

// const persistConfig = {
// 	key: "root",
// 	storage
// };

const rootReducer = combineReducers({
	categoryReducer,
	usersReducer,
	recipesReducer,
	cartsReducer,
	postsReducer,
	productsReducer,
	sortReducer,
	editReducer
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}),
	devTools: true
});

// export const persistor = persistStore(store);

// persistor.purge();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
