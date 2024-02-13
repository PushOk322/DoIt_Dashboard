// TableHeadItem.tsx
import React from "react";
import "./RadioList.scss";

import { blue, grey } from "@mui/material/colors";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface Props {
	options: string[];
}

const RadioList: React.FC<Props> = ({ options }) => {
	return (
		<div className="check-box">
			<RadioGroup>
				{options.map((option, index) => {
					return (
						<FormControlLabel
							value={option}
							control={
								<Radio
									sx={{
										".css-ahj2mt-MuiTypography-root": { fontFamily: "Rubik", fontWeight: 400, fontSize: 16, color: "#cccdcd" },

										color: grey[800],
										"&.Mui-checked": {
											color: blue[600]
										}
									}}
								/>
							}
							label={option}
							key={index}
						/>
					);
				})}
			</RadioGroup>
		</div>
	);
};

export default RadioList;
