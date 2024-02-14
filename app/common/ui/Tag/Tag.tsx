// TableHeadItem.tsx
import React from "react";
import "./Tag.scss";

import { grey } from "@mui/material/colors";

import { Checkbox, FormControlLabel } from "@mui/material";

import { FunctionalButton } from "../../components/CustomMUI/CustomMUI";

interface Props {
	label: string;
	isActive?: boolean;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Tag: React.FC<Props> = ({ label, isActive, setActive }) => {
	return (
		<div
			className={`tag-box ${isActive && "active"}`}
			onClick={() => {
				setActive(label);
			}}
		>
			{label}
		</div>
	);
};

export default Tag;
