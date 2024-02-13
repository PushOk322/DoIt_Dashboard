// TableHeadItem.tsx
import React from "react";
import "./CheckBox.scss";

import { grey } from "@mui/material/colors";

import { Checkbox, FormControlLabel } from "@mui/material";

import { FunctionalButton } from "../../components/CustomMUI/CustomMUI";

interface Props {
	label: string;
}

const CheckBox: React.FC<Props> = ({ label }) => {
	return (
		<div className="check-box">
			<Checkbox
				sx={{
					color: grey[800],
					"&.Mui-checked": {
						color: grey[600]
					}
				}}
			/>
			{label}

			{/* <FormControlLabel
				className="check-box"
				control={
					<Checkbox
						sx={{
							color: grey[800],
							"&.Mui-checked": {
								color: grey[600]
							}
						}}
					/>
				}
				label={label}
			/> */}
		</div>
	);
};

export default CheckBox;
