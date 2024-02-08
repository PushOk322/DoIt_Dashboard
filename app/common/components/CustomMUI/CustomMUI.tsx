import { Button, styled } from "@mui/material";

export const TopNavButton = styled(Button)(() => ({
	fontFamily: "Rubik",
	background: "transparent",
	fontSize: "22px",
	fontWeight: 700,
	color: "#f5f5f5",
	border: "2px solid",
	borderRadius: "0px",
	borderColor: "#20252b !important",
	width: "100%",
	textTransform: "none",
	height: "82px",

	"&.active": {
		background: "#d8dfeb",
		border: "2px solid #20252b",
		color: "#0f1215"
	},
	"@media (max-width: 1200px)": {
		width: "100%",
		height: "62px",
		fontSize: "18px"
	},
	"@media (max-width: 600px)": {
		width: "100%",
		height: "52px",
		fontSize: "14px",
		border: "1px solid"
	}
}));
