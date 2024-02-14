// TableHeadItem.tsx
import React from "react";
import "./InputDef.scss";

import { TextFieldDef } from "../../components/CustomMUI/CustomMUI";

interface Props {
	placeholder?: string;
}
const TextArea: React.FC<Props> = ({ placeholder }) => {
	return <TextFieldDef  label={placeholder} multiline maxRows={4}></TextFieldDef>;
};

export default TextArea;
