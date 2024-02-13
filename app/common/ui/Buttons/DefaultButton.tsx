"use client";

import React from "react";
import { FunctionalButton } from "@/app/common/components/CustomMUI/CustomMUI";

interface IDefaultButtonProps {
    buttonValue: string;
    handleClick: () => void;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({ buttonValue, handleClick }) => {
    
	return <FunctionalButton onClick={()=>{handleClick()}}>{buttonValue}</FunctionalButton>;
};

export default DefaultButton;
