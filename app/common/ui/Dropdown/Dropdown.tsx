// TableHeadItem.tsx
import React from "react";
import "./Dropdown.scss";

import { MenuItem, Select, SelectChangeEvent, MenuList } from "@mui/material";

interface Props {
	label?: string;
	options: string[];
}

const Dropdown: React.FC<Props> = ({ options, label }) => {
	const [value, setValue] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value as string);
	};
	return (
		<Select
			defaultValue=""
			variant="outlined"
			sx={{
				width: "100%",
				height: 40,
				border: "2px solid #20252b",
				boxShadow: "none",
				fontFamily: "Rubik",
				fontWeight: 400,
				fontSize: 16,
				color: "#cccdcd"
			}}
			onChange={handleChange}
			label={label}
			MenuProps={{ sx: { padding: 0 } }}
		>
			{options.map((dropItem, index) => {
				return (
					<MenuItem value={dropItem} key={index}>
						{dropItem}
					</MenuItem>
				);
			})}
		</Select>
	);
};

export default Dropdown;

// import React, { useState } from "react";
// import "./Dropdown.scss";
// import DropdownItem from "./DropdownItem";

// interface Props {
// 	options: string[];
// }

// const Dropdown: React.FC<Props> = ({ options, }) => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [selectedOption, setSelectedOption] = useState<string | null>(null);

// 	const toggleDropdown = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	const handleSelect = (option: string) => {
// 		setSelectedOption(option);
// 		setIsOpen(false);
// 	};

// 	return (
// 		<div className="dropdown">
// 			<div className="dropdown__toggle" onClick={toggleDropdown}>
// 				{selectedOption || "Select an option"}
// 			</div>
// 			{isOpen && (
// 				<div className="dropdown-menu">
// 					{options.map((option, index) => (
// 						<DropdownItem key={index} option={option} onSelect={() => handleSelect(option)} />
// 					))}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Dropdown;
