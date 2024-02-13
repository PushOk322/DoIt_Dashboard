import { createSlice } from "@reduxjs/toolkit";

export interface IEdit {
	isActive: boolean;
	isSavePending: boolean;
	isCancelPending: boolean;
}

const initialState: IEdit = {
	isActive: false,
	isSavePending: false,
	isCancelPending: false,
};

const editData = createSlice({
	name: "editData",
	initialState,
	reducers: {
		setEditActive: (state, action) => {
			state.isActive = !state.isActive;
			console.log("🚀 ~ !state.isActive:", !state.isActive)
			
		},
		saveChanges: (state, action) => {
			state.isSavePending = true;
			state.isActive = false;
			state.isCancelPending = false;
		},
		cancelChanges: (state, action) => {
			state.isCancelPending = true;
			state.isActive = false; 
			state.isSavePending = true;
		}
	}
});

export const { setEditActive, saveChanges, cancelChanges } = editData.actions;

export default editData.reducer;
