"use client";

import React, { FC, useEffect, useState } from "react";
import "./Dashboard.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import TableHeadItem from "../Table/TableHead/TableHeadItem";

import expandIcon from "/public/img/expand-icon.svg";

export default function Acordeon() {
	return (
		<div className="acordeon">
			<div className="acordeon__head">
				<TableHeadItem label={"New Position"}></TableHeadItem>
			</div>
			<div className="acordeon__content">
				<Accordion>
					<AccordionSummary expandIcon={expandIcon} aria-controls="panel2-content" id="panel2-header">
						Accordion 2
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</Accordion>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={expandIcon} aria-controls="panel3-content" id="panel3-header">
						Accordion Actions
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
