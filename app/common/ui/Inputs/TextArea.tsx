// TableHeadItem.tsx
import React from "react";
import "./InputDef.scss";



interface Props {
	placeholder?: string;
	isMini?: boolean;
	type: "email" | "url" | "text";
}
const InputDef: React.FC<Props> = ({ placeholder, isMini, type }) => {

	return (
		<>
		</>
	);
};

export default InputDef;
