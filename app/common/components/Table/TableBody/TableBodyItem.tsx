import React, { useEffect, useState } from "react";
import TableBodyTag from "./TableBodyTag";
import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { setChosenUsers } from "@/app/Redux/slice/users/usersSlice";

interface Props {
	id: number;
	itemValue: string | string[];
	fieldName: string;
}

export const TableBodyItem: React.FC<Props> = ({ id, itemValue, fieldName }) => {
	const isEditable: boolean = useAppSelector((state) => state.editReducer.isActive);
	const isCanceled: boolean = useAppSelector((state) => state.editReducer.isCancelPending);
	const isSaved: boolean = useAppSelector((state) => state.editReducer.isSavePending);
	const [modifiedValue, setModifiedValue] = useState<string | string[]>(itemValue);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isEditable && isSaved && modifiedValue !== itemValue) {
			dispatch(setChosenUsers({ id, fieldName, modifiedValue }));
			console.log("changed something" + id, fieldName, modifiedValue);
		}
	}, [isEditable, isCanceled, isSaved]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setModifiedValue(event.target.value);
	};

	const renderValue = (value: string | string[]) => {
		if (typeof value === "string") {
			if (value.length > 30) {
				return value.slice(0, 30) + "...";
			}
			return value;
		} else if (Array.isArray(value)) {
			// Join array of strings with comma separator
			return <TableBodyTag item={value}></TableBodyTag>;
		}
		return value;
	};

	return <td className="table__body-item">{isEditable ? <input type="text" value={modifiedValue} onChange={handleChange} placeholder={String(itemValue)} className="table__body-item-input" /> : renderValue(itemValue)}</td>;
};
