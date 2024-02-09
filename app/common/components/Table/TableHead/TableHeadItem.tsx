// TableHeadItem.tsx
import React from "react";

import Image from "next/image";

import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { setChosenSort } from "@/app/Redux/slice/sort/sortSlice";

import sortingArrowUp from "/public/img/sorting-arrow.svg";

interface Props {
	label: string;
}

const TableHeadItem: React.FC<Props> = ({ label }) => {
	const sortChosen: string = useAppSelector((state) => state.sortReducer.chosenSort);
	const sortMethod = useAppSelector((state) => state.sortReducer.sortMethod);
	const dispatch = useAppDispatch();
	const handleClick = (label: string) => {
		dispatch(setChosenSort(label));
	};
	return (
		<th
			className="table__head-item"
			onClick={() => {
				handleClick(label);
			}}
		>
			<div className="table__head-item-block">
				{label}
				{sortChosen === label ? (
					sortMethod ? (
						<Image src={sortingArrowUp} alt="table__head-arrow" className="table__head-arrow"></Image>
					) : (
						<Image src={sortingArrowUp} alt="table__head-arrow bottom" className="table__head-arrow bottom"></Image>
					)
				) : (
					<div className="table__head-arrows">
						<Image src={sortingArrowUp} alt="table__head-arrow" className="table__head-arrow"></Image>
						<Image src={sortingArrowUp} alt="table__head-arrow" className="table__head-arrow bottom"></Image>
					</div>
				)}
			</div>
		</th>
	);
};

export default TableHeadItem;
