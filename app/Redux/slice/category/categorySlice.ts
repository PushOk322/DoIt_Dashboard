"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ICategoryData {
	categories: {
		chosenCategory: string;
		baseCategories: string[];
	};
}

const initialState: ICategoryData = {
	categories: {
		chosenCategory: "Users",
		baseCategories: ["Users", "Products", "Posts", "Carts", "Recipes"]
	}
};

const categoryData = createSlice({
	name: "categoryData",
	initialState,
	reducers: {
		setChosenCategory: (state, action) => {
			state.categories.chosenCategory = action.payload;
		},
	}
});

export const { setChosenCategory} = categoryData.actions;

export default categoryData.reducer;
