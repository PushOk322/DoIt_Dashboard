import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from "@reduxjs/toolkit";

export interface IPost {
	id: number;
	userId: number;
	title: string;
	tags: string[];
}

export interface IPostsData {
	posts: IPost[];
}

const initialState: IPostsData = {
	posts: []
};

// Async thunk to fetch posts data
export const fetchPostsData = createAsyncThunk<IPostsData>("postsData/fetchPostsData", async function (): Promise<IPostsData> {
	try {
		const response = await fetch("https://dummyjson.com/posts");

		if (!response.ok) {
			throw new Error("Server Error!");
		}

		const data: IPostsData = await response.json();

		return data;
	} catch (error) {
		throw new Error("Server Error!");
	}
});

const postsDataSlice = createSlice({
	name: "postsData",
	initialState,
	reducers: {
		setChosenPosts: (state, action: PayloadAction<IPost[]>) => {
			state.posts = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPostsData.fulfilled, (state, action: PayloadAction<IPostsData>) => {
			state.posts = action.payload.posts.map((user: any) => ({
				id: user.id,
				userId: user.userId,
				title: user.title,
				tags: user.tags
			}));
		})
			.addCase(fetchPostsData.pending, (state) => {
				// Handle pending state
				// You can update loading state or any other relevant state here
			})
			.addCase(fetchPostsData.rejected, (state, action) => {
				// Handle rejected state
				// You can update error state or any other relevant state here
				console.error("Failed to fetch posts data:", action.error.message);
			});
	}
});

export const { setChosenPosts } = postsDataSlice.actions;

export default postsDataSlice.reducer;
