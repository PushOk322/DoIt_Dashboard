import React, { FC, useEffect, useMemo } from "react";
import "./Table.scss";
import { useAppSelector, useAppDispatch, RootState } from "@/app/Redux/store";
import { fetchUsersData } from "@/app/Redux/slice/users/usersSlice";
import { fetchRecipesData } from "@/app/Redux/slice/recipes/recipesSlice";
import { fetchProductsData } from "@/app/Redux/slice/products/productsSlice";
import { fetchCartsData } from "@/app/Redux/slice/carts/cartsSlice";
import { fetchPostsData } from "@/app/Redux/slice/posts/postsSlice";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

import { Action, ThunkAction } from "@reduxjs/toolkit";

type categories = "users" | "recipes" | "products" | "carts" | "posts";

interface CategoryMap {
	fetchAction: () => ThunkAction<void, RootState, unknown, Action>;
	dataSelector: (state: RootState) => any;
}

const categoryMap: Record<categories, CategoryMap> = {
	users: { fetchAction: fetchUsersData, dataSelector: (state) => state.usersReducer.users },
	recipes: { fetchAction: fetchRecipesData, dataSelector: (state) => state.recipesReducer.recipes },
	products: { fetchAction: fetchProductsData, dataSelector: (state) => state.productsReducer.products },
	carts: { fetchAction: fetchCartsData, dataSelector: (state) => state.cartsReducer.carts },
	posts: { fetchAction: fetchPostsData, dataSelector: (state) => state.postsReducer.posts }
};
const Table: FC = () => {
	const dispatch = useAppDispatch();
	const chosenCategory: categories = useAppSelector((state) => state.categoryReducer.categories.chosenCategory);

	useEffect(() => {
		const { fetchAction } = categoryMap[chosenCategory];
		dispatch(fetchAction());
	}, [chosenCategory, dispatch]);

	const { dataSelector } = categoryMap[chosenCategory];
	const data = useAppSelector(dataSelector);

	const chosenSort = useAppSelector((state) => state.sortReducer);

	const sortedData = useMemo(() => {
		if (!chosenSort) return data;

		return [...data].sort((a, b) => {
			// Assuming chosenSort is the key in your data object
			if (chosenSort.sortMethod === true) {
				if (a[chosenSort.chosenSort] < b[chosenSort.chosenSort]) return -1;
				if (a[chosenSort.chosenSort] > b[chosenSort.chosenSort]) return 1;
			} else {
				if (a[chosenSort.chosenSort] < b[chosenSort.chosenSort]) return 1;
				if (a[chosenSort.chosenSort] > b[chosenSort.chosenSort]) return -1;
			}

			return 0;
		});
	}, [data, chosenSort]);

	return (
		<table className="table">
			<TableHead data={sortedData} />
			<TableBody data={sortedData} />
		</table>
	);
};

export default Table;
