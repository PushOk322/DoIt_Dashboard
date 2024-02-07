import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ICart {
	id: number;
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: string;
}

export interface ICartsData {
	carts: ICart[];
}

const initialState: ICartsData = {
	carts: []
};

// Async thunk to fetch carts data
export const fetchCartsData = createAsyncThunk("cartsData/fetchCartsData", async () => {
	try {
		const response = await fetch("https://dummyjson.com/carts"); // Replace with your API endpoint
		const data = await response.json();
		console.log("🚀 ~ data:", data);

		return data;
	} catch (error) {
		throw Error("Failed to fetch carts data");
	}
});

const cartsData = createSlice({
	name: "cartsData",
	initialState,
	reducers: {
		setChosenCarts: (state, action) => {
			// Modify state if needed based on action payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCartsData.fulfilled, (state, action) => {
			state.carts = action.payload.carts.map((cart: any) => ({
				id: cart.id,
				total: cart.total,
				discountedTotal: cart.discountedTotal,
				userId: cart.userId,
				totalProducts: cart.totalProducts
			}));
			console.log("🚀 ~ builder.addCase ~ state.carts:", state.carts);
		});
	}
});

export const { setChosenCarts } = cartsData.actions;

export default cartsData.reducer;
