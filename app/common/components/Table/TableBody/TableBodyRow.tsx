import React from "react";

import TableBodyTag from "./TableBodyTag";
import { TableBodyItem } from "./TableBodyItem";

interface Props {
	item: any;
}

export const TableBodyRow: React.FC<Props> = ({ item }) => {
	return (
		<tr className="table__body-row">
			{Object.keys(item).map((field, index) => (
                <TableBodyItem itemValue={item[field]} fieldName={field} key={index}></TableBodyItem>
			))}
		</tr>
	);
}; 

// export default TableBodyRow;
