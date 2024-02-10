import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// Async thunk to fetch productss data
export const fetchProductsData = createAsyncThunk( "productsData/fetchProductsData", async () => {
	try {
		const response = await fetch("https://dummyjson.com/products"); // Replace with your API endpoint
		const data = await response.json();

		return data;
	} catch (error) {
		throw Error("Failed to fetch products data");
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
		});
	}
});

export const { setChosenProducts } = productsData.actions;

export default productsData.reducer;
