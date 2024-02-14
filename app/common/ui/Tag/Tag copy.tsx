// TableHeadItem.tsx
import React from "react";
import "./Tag.scss";

import { grey } from "@mui/material/colors";

import { Checkbox, FormControlLabel } from "@mui/material";

import { FunctionalButton } from "../../components/CustomMUI/CustomMUI";

interface Props {
	label: string;
	isActive?: boolean;
}

const Tag: React.FC<Props> = ({ label, isActive }) => {
	return <div className={`tag-box ${isActive && "active"}`}>{label}</div>;
};

export default Tag;
