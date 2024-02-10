"use client";

import React from "react";

interface IDefaultButtonProps {
    buttonValue: string;
    handleClick: () => void;
}

const DefaultButton: React.FC<IDefaultButtonProps> = ({ buttonValue, handleClick }) => {
    
	return <button className="default-button" onClick={()=>{handleClick()}}>{buttonValue}</button>;
};

export default DefaultButton;
