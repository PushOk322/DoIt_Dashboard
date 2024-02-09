import { createSlice } from "@reduxjs/toolkit";

export interface IEdit {
    isActive: boolean;
}

const initialState: IEdit = {
    isActive: true,
};

const editData = createSlice({
	name: "editData",
	initialState,
	reducers: {
		setEditActive: (state, action) => {
            state.isActive = !state.isActive;
		}
	}
});

export const { setEditActive } = editData.actions;

export default editData.reducer;
