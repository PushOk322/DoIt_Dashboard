"use client";

import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import "./Dashboard.scss";

import { fetchUsersData } from "@/app/Redux/slice/users/usersSlice";

import TopNav from "../TopNav/TopNav";
import Table from "../Table/Table";

export default function Dashboard() {
	() => {
		dispatch({ type: "RESET_STATE" });
	};
	const dispatch = useAppDispatch(); // Retrieve dispatch function from Redux store
	const users = useAppSelector((state) => state.usersReducer.users);

	useEffect(() => {
		// Dispatch fetchUsersData action to initiate data fetching
		dispatch(fetchUsersData());
	}, [dispatch]); // Pass dispatch as a dependency to useEffect

	return (
		<div className="dashboard">
			<TopNav></TopNav>
			<Table></Table>
		</div>
	);
}
