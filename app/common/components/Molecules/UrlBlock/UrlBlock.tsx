// TableHeadItem.tsx
import React from "react";
import "./UrlBlock.scss";

import InputDef from "@/app/common/ui/Inputs/InputDef";
import GreyButton from "@/app/common/ui/Buttons/GreyButton";

interface Props {
	inputPlaceholder: string;
	buttonValue: string;
	inputType: "text" | "email" | "url";
}

const UrlBlock: React.FC<Props> = ({ inputPlaceholder, buttonValue, inputType }) => {
	return (
		<div className="url-block">
			<InputDef type={inputType} placeholder={inputPlaceholder}></InputDef>
			<GreyButton value={buttonValue}></GreyButton>
		</div>
	);
};

export default UrlBlock;
