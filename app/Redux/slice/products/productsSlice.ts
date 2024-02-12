import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

export interface IProducts {
	id: number;
	title: string;
	description: string;
	rating: number;
	price: number;
	stock: number;
}

export interface IProductsData {
	products: IProducts[];
}

const initialState: IProductsData = {
	products: []
};

// Async thunk to fetch posts data
export const fetchProductsData = createAsyncThunk<IProductsData>("productsData/fetchProductsData", async function (): Promise<IProductsData> {
	try {
		const response = await fetch("https://dummyjson.com/products");

		if (!response.ok) {
			throw new Error("Server Error!");
		}

		const data: IProductsData = await response.json();

		return data;
	} catch (error) {
		throw new Error("Server Error!");
	}
});

const productsData = createSlice({
	name: "productsData",
	initialState,
	reducers: {
		setChosenProducts: (state, action) => {
			// Modify state if needed based on action payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProductsData.fulfilled, (state, action) => {
			state.products = action.payload.products.map((products: any) => ({
				id: products.id,
				title: products.title,
				description: products.description,
				rating: products.rating,
				price: products.price,
				stock: products.stock
			}));
			console.log("🚀 ~ builder.addCase ~ state.productss:", state.products);
		})
		.addCase(fetchProductsData.pending, (state) => {
			// Handle pending state
			// You can update loading state or any other relevant state here
		})
		.addCase(fetchProductsData.rejected, (state, action) => {
			// Handle rejected state
			// You can update error state or any other relevant state here
			console.error("Failed to fetch posts data:", action.error.message);
		});
	}
});

export const { setChosenProducts } = productsData.actions;

export default productsData.reducer;
