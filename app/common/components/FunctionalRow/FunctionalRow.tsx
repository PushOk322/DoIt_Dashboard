"use client";

import React, { FC, useEffect, useState } from "react";
import "./FunctionalRow.scss";

import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { setEditActive , saveChanges, cancelChanges} from "@/app/Redux/slice/edit/editSlice";


import DefaultButton from "../../ui/Buttons/DefaultButton";

export default function FunctionalRow() {
	const dispatch = useAppDispatch();

	const editState: boolean = useAppSelector((state) => state.editReducer.isActive);

	const handleEditModeClick = () => {
        dispatch(setEditActive(""));
    };

    const handleSaveChangesClick = () => {
        dispatch(saveChanges(""));
    };

    const handleCancelChangesClick = () => {
        dispatch(cancelChanges(""));
	};
	


	//ADD ITEM STATE FROM NEW SLICE
	const handleAddItem = () => {
        dispatch(cancelChanges(""));
	};

	const buttonConfigs = [
		{
			text: !editState ? "Edit Mode" : "Cancel",
			onClick: !editState ? handleEditModeClick : handleCancelChangesClick,
		},
		{
			text: !editState ? "Add new item" : "Save changes",
			onClick: !editState ? handleAddItem : handleSaveChangesClick,
		},
	];

	return (
		<div className="functional-row">
			{buttonConfigs.map((config, index) => (
				<DefaultButton key={index} handleClick={config.onClick} buttonValue={config.text}>					
				</DefaultButton>
			))}
		</div>
	);
}

