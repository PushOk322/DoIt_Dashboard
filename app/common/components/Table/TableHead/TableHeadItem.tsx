// TableHeadItem.tsx
import React from "react";

interface Props {
	label: string;
}

const TableHeadItem: React.FC<Props> = ({ label }) => {
	return <th className="table__head-item">{label}</th>;
};

export default TableHeadItem;
