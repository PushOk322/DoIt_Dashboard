// TableHeadItem.tsx
import React from "react";
import "./CheckList.scss";

import CheckBox from "@/app/common/ui/Checkbox/CheckBox";

interface Props {
	options: string[];
}

const CheckList: React.FC<Props> = ({ options }) => {
	return (
		<div className="check-list">
			{options.map((option, index) => {
				return <CheckBox label={option} key={index}></CheckBox>;
			})}
		</div>
	);
};

export default CheckList;
