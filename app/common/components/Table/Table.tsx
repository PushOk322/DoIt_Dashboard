// Table.tsx
import React, { FC, useEffect, useMemo } from "react";
import "./Table.scss";
import { useAppSelector, useAppDispatch } from "@/app/Redux/store";
import { fetchUsersData } from "@/app/Redux/slice/users/usersSlice";
import { fetchRecipesData } from "@/app/Redux/slice/recipes/recipesSlice";
import { fetchProductsData } from "@/app/Redux/slice/products/productsSlice";
import { fetchCartsData } from "@/app/Redux/slice/carts/cartsSlice";
import { fetchPostsData } from "@/app/Redux/slice/posts/postsSlice";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table: FC = () => {
	const dispatch = useAppDispatch();
	const chosenCategory = useAppSelector((state) => state.categoryReducer.categories.chosenCategory.toLowerCase());

	useEffect(() => {
		switch (chosenCategory) {
			case "users":
				dispatch(fetchUsersData());
				break;
			case "recipes":
				dispatch(fetchRecipesData());
				break;
			case "products":
				dispatch(fetchProductsData());
				break;
			case "carts":
				dispatch(fetchCartsData());
				break;
			case "posts":
				dispatch(fetchPostsData());
				break;
			default:
				break;
		}
	}, [chosenCategory, dispatch]);

	let data: any;

	switch (chosenCategory) {
		case "users":
			data = useAppSelector((state) => state.usersReducer.users);
			break;
		case "recipes":
			data = useAppSelector((state) => state.recipesReducer.recipes);
			break;
		case "products":
			data = useAppSelector((state) => state.productsReducer.products);
			break;
		case "carts":
			data = useAppSelector((state) => state.cartsReducer.carts);
			break;
		case "posts":
			data = useAppSelector((state) => state.postsReducer.posts);
			break;
		default:
			data = [];
	}

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
