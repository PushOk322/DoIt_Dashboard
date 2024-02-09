import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IPosts {
	id: number;
	userId: number;
	title: string;
	tags: string[];
}

export interface IPostsData {
	posts: IPosts[];
}

const initialState: IPostsData = {
	posts: []
};

// Async thunk to fetch postss data
export const fetchPostsData = createAsyncThunk("postsData/fetchPostsData", async () => {
	try {
		const response = await fetch("https://dummyjson.com/posts"); // Replace with your API endpoint
		const data = await response.json();

		return data;
	} catch (error) {
		throw Error("Failed to fetch posts data");
	}
});

const postsData = createSlice({
	name: "postsData",
	initialState,
	reducers: {
		setChosenPosts: (state, action) => {
			// Modify state if needed based on action payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPostsData.fulfilled, (state, action) => {
			state.posts = action.payload.posts.map((posts: any) => ({
				id: posts.id,
				userId: posts.userId,
				title: posts.title,
				tags: posts.tags
			}));
		});
	}
});

export const { setChosenPosts } = postsData.actions;

export default postsData.reducer;
