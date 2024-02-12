import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ICart {
	id: number;
	total: number;
	discountedTotal: number;
	userId: number;
	// totalProducts: number;
}

export interface ICartsData {
	carts: ICart[];
}

const initialState: ICartsData = {
	carts: []
};

export const fetchCartsData = createAsyncThunk<ICartsData>("cartsData/fetchCartsData", async function (): Promise<ICartsData> {
	try {
		const response = await fetch("https://dummyjson.com/carts");

		if (!response.ok) {
			throw new Error("Server Error!");
		}

		const data: ICartsData = await response.json();

		return data;
	} catch (error) {
		throw new Error("Server Error!");
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
				userId: cart.userId
				// totalProducts: cart.totalProducts
			}));
			console.log("🚀 ~ builder.addCase ~ state.carts:", state.carts);
		})
			.addCase(fetchCartsData.pending, (state) => {
				// Handle pending state
				// You can update loading state or any other relevant state here
			})
			.addCase(fetchCartsData.rejected, (state, action) => {
				// Handle rejected state
				// You can update error state or any other relevant state here
				console.error("Failed to fetch posts data:", action.error.message);
			});
	}
});

export const { setChosenCarts } = cartsData.actions;

export default cartsData.reducer;
