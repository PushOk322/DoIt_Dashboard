import { createSlice } from "@reduxjs/toolkit";

export interface ISort {
	chosenSort: string;
	sortMethod: boolean;
}

const initialState: ISort = {
	chosenSort: "id",
	sortMethod: true
};

const sortData = createSlice({
	name: "sortData",
	initialState,
	reducers: {
		setChosenSort: (state, action) => {
			// Toggle sortMethod if chosenSort remains the same
			if (state.chosenSort === action.payload) {
				state.sortMethod = !state.sortMethod;
			}else{
				// Set sortMethod to true if chosenSort changes
				state.sortMethod = true;
			}
			// Update chosenSort
			state.chosenSort = action.payload;
		}
	}
});

export const { setChosenSort } = sortData.actions;

export default sortData.reducer;
