import React from "react";

interface Props {
	item: string[];
}

const TableBodyTag: React.FC<Props> = ({ item }) => {
	return (
		<div className="table__body-tag-container">
			{item.map((item, index) => (
				<div className="table__body-tag" key={index}>
					{item}
				</div>
			))}
		</div>
	);
};

export default TableBodyTag;
