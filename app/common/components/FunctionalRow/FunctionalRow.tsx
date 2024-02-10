"use client";

import React, { FC, useEffect, useState } from "react";
import "./TopNav.scss";

import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { setEditActive } from "@/app/Redux/slice/edit/editSlice";

import DefaultButton from "../../ui/Icons/Buttons/DefaultButton";

export default function functionalRow() {
	const dispatch = useAppDispatch();

	const editState = useAppSelector((state) => {
		state.editReducer.isActive;
	});

    const handleEditCLick = ():void => {
        dispatch(setEditActive(""));
    };

    useEffect(() => {
        
    },[editState]);

	return (
		<div className="functional-row">
            <DefaultButton handleClick={() => { handleEditCLick() }} buttonValue={"Edit mode" }></DefaultButton>
		</div>
	);
}
