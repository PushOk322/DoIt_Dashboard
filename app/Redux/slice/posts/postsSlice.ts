import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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
export const fetchPostsData = createAsyncThunk(
	"postsData/fetchPostsData",
	async (): Promise<IPostsData> => {
		try {
			const response = await fetch("https://dummyjson.com/posts"); // Replace with your API endpoint
			if (!response.ok) {
				throw new Error("Failed to fetch posts data");
			}
			const data: IPostsData = await response.json();

			return data;
		} catch (error) {
			throw new Error("Failed to fetch posts data");
		}
	}
);

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
			state.posts = action.payload.posts;
		});
	}
});

export const { setChosenPosts } = postsDataSlice.actions;

export default postsDataSlice.reducer;
