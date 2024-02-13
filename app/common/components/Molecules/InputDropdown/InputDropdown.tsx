// TableHeadItem.tsx
import React from "react";
import "./InputDropdown.scss";

import InputDef from "@/app/common/ui/Inputs/InputDef";
import Dropdown from "@/app/common/ui/Dropdown/Dropdown";

interface Props {
	inputPlaceholder: string;
	dropdownPlaceholder: string;
	inputType: "text" | "email" | "url";
	options: string[];
}

const InputDropdown: React.FC<Props> = ({ options, inputPlaceholder, dropdownPlaceholder, inputType }) => {
	return (
		<div className="input-dropdown">
			<InputDef type={inputType} placeholder={inputPlaceholder}></InputDef>
			<Dropdown options={options} label={dropdownPlaceholder}></Dropdown>
		</div>
	);
};

export default InputDropdown;
