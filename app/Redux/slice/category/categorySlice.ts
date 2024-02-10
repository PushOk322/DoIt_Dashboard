"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ICategoryData {
	categories: {
		chosenCategory: "users" | "recipes" | "products" | "carts" | "posts";
		baseCategories: string[];
	};
}

const initialState: ICategoryData = {
	categories: {
		chosenCategory: "users",
		baseCategories: ["users", "products", "posts", "carts", "recipes"]
	}
};

const categoryData = createSlice({
	name: "categoryData",
	initialState,
	reducers: {
		setChosenCategory: (state, action) => {
			state.categories.chosenCategory = action.payload;
		}
	}
});

export const { setChosenCategory } = categoryData.actions;

export default categoryData.reducer;
