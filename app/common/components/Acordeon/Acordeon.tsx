"use client";

import React, { FC, useEffect, useState } from "react";
import "./Acordeon.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MyAccordion, MyAccordionDetails, MyAccordionSummary } from "../CustomMUI/CustomMUI";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ContentBrick from "../Molecules/ContentBrick/ContentBrick";

import Dropdown from "../../ui/Dropdown/Dropdown";
import InputDef from "../../ui/Inputs/InputDef";
import TextArea from "../../ui/Inputs/TextArea";

import { grey } from "@mui/material/colors";

interface Props {
	options?: string[];
}

const Acordeon: React.FC<Props> = ({ options }) => {
	return (
		<div className="acordeon">
			<div className="acordeon__head">New Position</div>
			<div className="acordeon__content">
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Basic info
					</MyAccordionSummary>
					<MyAccordionDetails>
						<ContentBrick label={"Host"} content={[<Dropdown label={"Host"} options={["User1231", "Player1231", "Admin1231", "Player1231342"]}></Dropdown>]}></ContentBrick>
						<ContentBrick label={"Position Name"} content={[<InputDef placeholder="Position Name" type={ "text"}></InputDef>]}></ContentBrick>
						<ContentBrick label={"URL"} content={[<InputDef placeholder="URL" type={"url"}></InputDef>]}></ContentBrick>
						<ContentBrick label={"Quick Rules"} content={[<TextArea placeholder="You can write here somebody about your tournament...." ></TextArea>]}></ContentBrick>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Accordion 2
					</MyAccordionSummary>
					<MyAccordionDetails>asdfasdfasdfasdf</MyAccordionDetails>
				</MyAccordion>
			</div>
		</div>
	);
};
export default Acordeon;
