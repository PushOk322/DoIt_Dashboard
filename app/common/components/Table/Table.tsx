// Table.tsx
import React, { FC, useEffect } from "react";
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

	return (
		<table className="table">
			<TableHead data={data} />
			<TableBody data={data} />
		</table>
	);
};

export default Table;
