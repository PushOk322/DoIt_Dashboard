import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { WritableDraft } from "immer";

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
			const { id, fieldName, modifiedValue } = action.payload;
			console.log("🚀 ~ id, fieldName, modifiedValue:", id, fieldName, modifiedValue)

			// Create a new array of users with the updated field value
			const updatedUsers = state.users.map((user) => {
				if (user.id === id) {
					return {
						...user,
						[fieldName]: modifiedValue
					};
				}
				return user;
			});

			// Update the state with the new array of users
			state.users = updatedUsers;
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
