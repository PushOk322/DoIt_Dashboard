// TableBody.tsx
import React from "react";
import { TableBodyRow } from "./TableBodyRow";

interface Props {
	data: any;
}

export const TableBody: React.FC<Props> = ({ data }) => {
	return (
		<tbody className="table__body">
			{data.map((item: any, index: number) => (
				<TableBodyRow key={index} item={item} />
			))}
		</tbody>
	);
};
