"use client";

import React, { FC, useEffect, useState } from "react";


import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { setChosenCategory } from "@/app/Redux/slice/category/categorySlice";

import { TopNavButton } from "../CustomMUI/CustomMUI";

interface TopNavItemProps {
	buttonValue: string;
}

const TopNavItem: React.FC<TopNavItemProps> = ({ buttonValue }) => {
	const dispatch = useAppDispatch(); // Retrieve dispatch function from Redux store
	const handleCLick = (category: string): void => {
		dispatch(setChosenCategory(category));
	};

	const chosenCategory = useAppSelector((state) => state.categoryReducer.categories.chosenCategory);

	// Check if the buttonValue matches the chosenCategory
	const buttonIsActive = buttonValue === chosenCategory;



	return (
		<>
			<TopNavButton
				// variant="outlined"
				onClick={() => {
					handleCLick(buttonValue);
				}}
				className={`${buttonIsActive && "active"}`}
			>
				{buttonValue}
			</TopNavButton>
		</>
	);
};

export default TopNavItem;
