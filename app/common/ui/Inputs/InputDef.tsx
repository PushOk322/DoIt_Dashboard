// TableHeadItem.tsx
import React from "react";
import "./InputDef.scss";

import { InputDefault } from "../../components/CustomMUI/CustomMUI";

interface Props {
	placeholder?: string;
	isMini?: boolean;
	type: "email" | "url" | "text";
}
const InputDef: React.FC<Props> = ({ placeholder, isMini, type }) => {
	let inputComponent;

	if (isMini) {
		inputComponent = <InputDefault placeholder={placeholder} type={type} />;
	} else {
		inputComponent = <InputDefault placeholder={placeholder} type={type} />;
	}

	return (
		<div className="input-container">
			{type === "url" && <div className="input-container__url-pre">Doit.gg/</div>}
			{inputComponent}
		</div>
	);
};

export default InputDef;
