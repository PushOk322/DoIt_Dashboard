"use client";

import React, { FC, useEffect, useState } from "react";

import { useAppDispatch } from "@/app/Redux/store";
import "./Dashboard.scss";

import { fetchUsersData } from "@/app/Redux/slice/users/usersSlice";

import TopNav from "../TopNav/TopNav";
import Table from "../Table/Table";
import FunctionalRow from "../FunctionalRow/FunctionalRow";

export default function Dashboard() {
	
	const dispatch = useAppDispatch(); // Retrieve dispatch function from Redux store

	useEffect(() => {
		// Dispatch fetchUsersData action to initiate data fetching
		dispatch(fetchUsersData());
	}, [dispatch]); // Pass dispatch as a dependency to useEffect

	return (
		<div className="dashboard">
			<TopNav></TopNav>
			<FunctionalRow></FunctionalRow>
			<Table></Table>
		</div>
	);
}
