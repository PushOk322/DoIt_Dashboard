import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

export interface IRecipes {
	id: number;
	cuisine: string;
	name: string;
	rating: number;
	prepTimeMinutes: number;
	cookTimeMinutes: number;
}

export interface IRecipessData {
	recipes: IRecipes[];
}

const initialState: IRecipessData = {
	recipes: []
};

// Async thunk to fetch posts data
export const fetchRecipesData = createAsyncThunk<IRecipessData>("recipesData/fetchRecipesData", async function (): Promise<IRecipessData> {
	try {
		const response = await fetch("https://dummyjson.com/recipes");

		if (!response.ok) {
			throw new Error("Server Error!");
		}

		const data: IRecipessData = await response.json();

		return data;
	} catch (error) {
		throw new Error("Server Error!");
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
				cuisine: recipes.cuisine,
				name: recipes.name,
				rating: recipes.rating,
				prepTimeMinutes: recipes.prepTimeMinutes,
				cookTimeMinutes: recipes.cookTimeMinutes
			}));
		})
		.addCase(fetchRecipesData.pending, (state) => {
			// Handle pending state
			// You can update loading state or any other relevant state here
		})
		.addCase(fetchRecipesData.rejected, (state, action) => {
			// Handle rejected state
			// You can update error state or any other relevant state here
			console.error("Failed to fetch posts data:", action.error.message);
		});
	}
});

export const { setChosenRecipess } = recipesData.actions;

export default recipesData.reducer;
