import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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

// Async thunk to fetch posts data
export const fetchUsersData = createAsyncThunk<IUsersData>("postsData/fetchUsersData", async function (): Promise<IUsersData> {
	try {
		const response = await fetch("https://dummyjson.com/users");

		if (!response.ok) {  
			throw new Error("Server Error!");
		}

		const data: IUsersData = await response.json();

		return data;
	} catch (error) {
		throw new Error("Server Error!");
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
		});
	}
});

export const { setChosenUsers } = usersData.actions;

export default usersData.reducer;
