// TableHead.tsx
import React from "react";
import TableHeadItem from "./TableHeadItem";

interface Props {
	data: any[];
}

const TableHead: React.FC<Props> = ({ data }) => {
	if (!data || data.length === 0) return null;

	const columns = Object.keys(data[0]);

	return (
		<thead className="table__head">
			<tr className="table__head-row">
				{columns.map((col, index) => (
					<TableHeadItem key={index} label={col} />
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
