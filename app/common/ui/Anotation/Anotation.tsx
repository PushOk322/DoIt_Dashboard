// TableHeadItem.tsx
import React from "react";
import "./Anotation.scss";


interface Props {
	value: string;
}

const Anotation: React.FC<Props> = ({ value }) => {
	
	return (
		<div className="anotation">{value}</div>
	);
};

export default Anotation;
