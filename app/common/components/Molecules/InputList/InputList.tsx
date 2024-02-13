// TableHeadItem.tsx
import React from "react";
import "./InputList.scss";

import InputDef from "@/app/common/ui/Inputs/InputDef";

type InputType = "text" | "email" | "url";

interface Props {
	inputPlaceholder: string;
	dropdownPlaceholder: string;
	inputTypes: InputType[];
	labels: string[];
}

const InputDropdown: React.FC<Props> = ({ labels, inputTypes }) => {
	return (
		<div className="input-list">
			{labels.map((label, index) => {
				return (
					<div className="input-list__row" key={index}>
						<div className="input-list__label">{label}</div>
						<InputDef type={inputTypes[index]}></InputDef>
					</div>
				);
			})}
		</div>
	);
};

export default InputDropdown;
