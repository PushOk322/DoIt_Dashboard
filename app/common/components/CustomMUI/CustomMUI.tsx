import { Accordion, AccordionSummary, AccordionDetails, Button, Input, TextField, styled } from "@mui/material";
import "../../../media_mixin.scss";

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

	"@media (max-width: 1170px)": {
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

export const FunctionalButton = styled(Button)(() => ({
	fontFamily: "Rubik",
	fontSize: "16px",
	fontWeight: 700,
	color: "#f5f5f5",
	textTransform: "none",
	background: "#1a222d",
	width: "fit-content",
	height: "51px",
	padding: "16px 44px",

	"&.active": {
		background: "#d8dfeb",
		border: "2px solid #20252b",
		color: "#0f1215"
	},
	"@media (max-width: 1170px)": {
		height: "62px",
		fontSize: "14px"
	},
	"@media (max-width: 600px)": {
		height: "52px",
		fontSize: "12px"
	}
}));

export const InputDefault = styled(Input)(() => ({
	fontFamily: "Rubik",
	fontSize: "16px",
	fontWeight: 400,
	color: "#cccdcd",
	textTransform: "none",
	background: "#0f1215",
	width: "100%",
	height: "40px",
	padding: "12px 16px",
	border: "2px solid #20252b",
	borderRadius: "4px",

	"@media (max-width: 1170px)": {
		fontSize: "14px"
	},
	"@media (max-width: 600px)": {
		fontSize: "12px"
	}
}));

export const TextFieldDef = styled(TextField)(() => ({
	fontFamily: "Rubik",
	fontSize: "16px",
	fontWeight: 400,
	color: "#cccdcd !important",
	textTransform: "none",
	background: "#0f1215",
	width: "100%",
	border: "2px solid #20252b",
	borderRadius: "4px",
	textarea: { color: "#cccdcd !important", "&::placeholder": { color: " #20252b !important" } },

	"@media (max-width: 1170px)": {
		fontSize: "14px"
	},
	"@media (max-width: 600px)": {
		fontSize: "12px"
	}
}));

export const MyAccordion = styled(Accordion)(() => ({
	fontFamily: "Rubik",
	fontSize: "16px",
	fontWeight: 400,
	color: "#cccdcd",
	textTransform: "none",
	background: "#0f1215",
	width: "100%",
	border: "2px solid #20252b",
	borderRadius: "4px",
	"@media (max-width: 1170px)": {
		fontSize: "14px"
	},
	"@media (max-width: 600px)": {
		fontSize: "12px"
	}
}));

export const MyAccordionSummary = styled(AccordionSummary)(() => ({
	fontFamily: "Rubik",
	fontSize: "22px",
	fontWeight: 500,
	color: "#cccdcd",
	textTransform: "none",
	background: "#0f1215",
	width: "100%",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",

	"@media (max-width: 1170px)": {
		fontSize: "14px"
	},
	"@media (max-width: 600px)": {
		fontSize: "12px"
	}
}));

export const MyAccordionDetails = styled(AccordionDetails)(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "20px",

	"@media (max-width: 1170px)": {
		fontSize: "14px"
	},
	"@media (max-width: 600px)": {
		fontSize: "12px"
	}
}));
