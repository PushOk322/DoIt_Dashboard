// TableBody.tsx
import React from "react";
import TableBodyItem from "./TableBodyItem";

interface Props {
	data: any[];
}

const TableBody: React.FC<Props> = ({ data }) => {
	return (
		<tbody className="table__body">
			{data.map((item: any, index: number) => (
				<TableBodyItem key={index} item={item} />
			))}
		</tbody>
	);
};

export default TableBody;
