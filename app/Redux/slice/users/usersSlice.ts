import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IUser {
	id: number;
	username: string;
	age: number;
	gender: string;
	password: string;
}

export interface IUsersData {
	users: IUser[];
}

const initialState: IUsersData = {
	users: []
};

// Async thunk to fetch users data
export const fetchUsersData = createAsyncThunk("usersData/fetchUsersData", async () => {
	try {
		const response = await fetch("https://dummyjson.com/users"); // Replace with your API endpoint
		const data = await response.json();
		console.log("🚀 ~ data:", data);

		return data;
	} catch (error) {
		throw Error("Failed to fetch users data");
	}
});

const usersData = createSlice({
	name: "usersData",
	initialState,
	reducers: {
		setChosenUsers: (state, action) => {
			// Modify state if needed based on action payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsersData.fulfilled, (state, action) => {
			state.users = action.payload.users.map((user: any) => ({
				id: user.id,
				username: user.username,
				age: user.age,
				gender: user.gender,
				password: user.password
			}));
			console.log("🚀 ~ builder.addCase ~ state.users:", state.users);
		});
	}
});

export const { setChosenUsers } = usersData.actions;

export default usersData.reducer;
