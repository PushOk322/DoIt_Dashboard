"use client";

import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import Image from "next/image";
import Link from "next/dist/client/link";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";

import { fetchUsersData } from "@/app/Redux/slice/users/usersSlice";

export default function Table() {
	const dispatch = useAppDispatch(); // Retrieve dispatch function from Redux store
	const users = useAppSelector((state) => state.usersReducer.users);

	useEffect(() => {
		// Dispatch fetchUsersData action to initiate data fetching
		dispatch(fetchUsersData());
	}, [dispatch]); // Pass dispatch as a dependency to useEffect

	return (
		<>
			<div className="users-list" style={{ width: 2000, height: 2000 }}>
				{users ? users[0].username : "no"}
			</div>
		</>
	);
}
