import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IRecipes {
	id: number;
	cuisine: string;
	name: string;
	rating: number;
	preptime: string;
	cooktime: string;
}

export interface IRecipessData {
	recipes: IRecipes[];
}

const initialState: IRecipessData = {
	recipes: []
};

// Async thunk to fetch recipess data
export const fetchRecipesData = createAsyncThunk("recipesData/fetchRecipesData", async () => {
	try {
		const response = await fetch("https://dummyjson.com/recipes"); // Replace with your API endpoint
		const data = await response.json();
		console.log("🚀 ~ data:", data);

		return data;
	} catch (error) {
		throw Error("Failed to fetch recipess data");
	}
});

const recipesData = createSlice({
	name: "recipesData",
	initialState,
	reducers: {
		setChosenRecipess: (state, action) => {
			// Modify state if needed based on action payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRecipesData.fulfilled, (state, action) => {
			state.recipes = action.payload.recipes.map((recipes: any) => ({
				id: recipes.id,
				cuisine:recipes.cuisine,
				name: recipes.name,
				rating: recipes.rating,
				preptime: recipes.preptime,
				cooktime: recipes.cooktime
			}));
			console.log("🚀 ~ builder.addCase ~ state.recipess:", state.recipes);
		});
	}
});

export const { setChosenRecipess } = recipesData.actions;

export default recipesData.reducer;
