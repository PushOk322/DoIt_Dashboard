// TableHeadItem.tsx
import React from "react";
import "./GreyButton.scss";

import { FunctionalButton } from "../../components/CustomMUI/CustomMUI";

interface Props {
	value: string;
}

const GreyButton: React.FC<Props> = ({ value }) => {
	
	return (
		<FunctionalButton>{value}</FunctionalButton>
	);
};

export default GreyButton;
