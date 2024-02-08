"use client";

import React, { FC, useEffect, useState } from "react";
import "./TopNav.scss";

import { useAppSelector } from "@/app/Redux/store";

import TopNavItem from "./TopNavItem";

export default function TopNav() {
	const categories = useAppSelector((state) => state.categoryReducer.categories);

	return (
		<div className="top-nav">
			{categories.baseCategoies
				? categories.baseCategoies.map((category: string, index) => {
						return <TopNavItem buttonValue={category} key={index} />;
				  })
				: "no categories"}
		</div>
	);
}
