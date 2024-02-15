"use client";

import React, { FC, useEffect, useState } from "react";
import "./Acordeon.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MyAccordion, MyAccordionDetails, MyAccordionSummary } from "../CustomMUI/CustomMUI";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ContentBrick from "../Molecules/ContentBrick/ContentBrick";
import ContentDoubleBrick from "../Molecules/ContentDoubleBrick/ContentDoubleBrick";
import RadioList from "../../ui/Radio/RadioList";
import UrlBlock from "../Molecules/UrlBlock/UrlBlock";
import TagList from "../Molecules/TagList/TagList";
import InputList from "../Molecules/InputList/InputList";
import InputDropdown from "../Molecules/InputDropdown/InputDropdown";

import Dropdown from "../../ui/Dropdown/Dropdown";
import InputDef from "../../ui/Inputs/InputDef";
import TextArea from "../../ui/Inputs/TextArea";
import CheckBox from "../../ui/Checkbox/CheckBox";
import Anotation from "../../ui/Anotation/Anotation";

import { grey } from "@mui/material/colors";
import CheckList from "../Molecules/CheckList/CheckList";
import GreyButton from "../../ui/Buttons/GreyButton";

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
						<ContentBrick label={"Position Name"} content={[<InputDef placeholder="Position Name" type={"text"}></InputDef>]}></ContentBrick>
						<ContentBrick label={"URL"} content={[<InputDef placeholder="URL" type={"url"}></InputDef>]}></ContentBrick>
						<ContentBrick label={"Quick Rules"} content={[<TextArea placeholder="You can write here somebody about your tournament...."></TextArea>]}></ContentBrick>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Game info
					</MyAccordionSummary>

					<MyAccordionDetails>
						<ContentBrick label={"Game"} content={[<Dropdown label={"The game or sport being played"} options={["Dota 2", "CS 2", "PoE", "Player1231342"]}></Dropdown>]}></ContentBrick>
						<ContentBrick label={"Type"} content={[<RadioList options={["Single stage tournament", "Two stage tournament"]}></RadioList>]}></ContentBrick>
						<ContentBrick label={"Format*"} content={[<Dropdown label={"The type of game"} options={["Single elimination", "Team on team"]}></Dropdown>]}></ContentBrick>
						<CheckBox label="Include a match for 3rd place"></CheckBox>
						<ContentDoubleBrick labels={["Mode*", "Map voting system"]} firstContent={[<Dropdown label={"The quantity of players"} options={["5x5", "10x10"]}></Dropdown>]} secondContent={[[<Dropdown label={"Map voting system"} options={["Starcraft2", "CS2 premier"]}></Dropdown>]]}></ContentDoubleBrick>
						<ContentBrick label={"Main Banner 370x200*"} content={[<UrlBlock inputPlaceholder="banner url" buttonValue="upload" inputType="text"></UrlBlock>]}></ContentBrick>
						<ContentBrick label={"Torunamnet background min 2000 x 3000"} content={[<UrlBlock inputPlaceholder="banner url" buttonValue="upload" inputType="text"></UrlBlock>]}></ContentBrick>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Registration
						<CheckBox label="Don’t Aprove players automaticly"></CheckBox>
					</MyAccordionSummary>

					<MyAccordionDetails>
						<ContentBrick label={"Registration* "} content={[<TagList labels={["Free", "Paid", "Premium", "Private"]}></TagList>]}></ContentBrick>
						<ContentDoubleBrick labels={["Start time*", ""]} firstContent={[<Dropdown label={"The start date"} options={["21.03.2020", "21.03.2020", "21.03.2020", "21.03.2020", "21.03.2020"]}></Dropdown>]} secondContent={[[<Dropdown label={"The start time"} options={["02:30 AM", "02:30 AM", "02:30 AM", "02:30 AM", "02:30 AM", "02:30 AM"]}></Dropdown>]]}></ContentDoubleBrick>
						<ContentDoubleBrick labels={["Estimated end*", ""]} firstContent={[<Dropdown label={"The end date"} options={["21.03.2020", "21.03.2020", "21.03.2020", "21.03.2020", "21.03.2020"]}></Dropdown>]} secondContent={[[<Dropdown label={"The end time"} options={["02:30 AM", "02:30 AM", "02:30 AM", "02:30 AM", "02:30 AM", "02:30 AM"]}></Dropdown>]]}></ContentDoubleBrick>
						<CheckBox label="Checkin Time"></CheckBox>
						<Dropdown label={"The end date"} options={["30 minute", "30 minute", "30 minute", "30 minute", "30 minute"]}></Dropdown>
						<Anotation value={"(GMT -05:00) Eastern time — set the time zone from your settings"}></Anotation>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Player list
					</MyAccordionSummary>

					<MyAccordionDetails>
						<TagList labels={["List of players", "Edit list of players"]}></TagList>
						<CheckBox label="Don’t show tournamnet on website"></CheckBox>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Leagues
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<TagList labels={["List of leagues", "Edit list of leagues"]}></TagList>
							<CheckBox label="Don’t show tournamnet on website"></CheckBox>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Prize pool
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<ContentDoubleBrick labels={["", ""]} firstContent={[<InputList inputTypes={["text"]} labels={["Prize pool:"]}></InputList>]} secondContent={[<InputList inputTypes={["text"]} labels={["MAX players/teams number:"]}></InputList>]}></ContentDoubleBrick>
							<CheckBox label={"3rd place turn on?"}></CheckBox>
							<ContentDoubleBrick labels={["", ""]} firstContent={[<InputList inputTypes={["text", "text", "text", "text"]} labels={["1st place:", "2nd place:", "3rd place:", "4th place:"]}></InputList>]} secondContent={[<InputList inputTypes={["text", "text", "text", "text"]} labels={["Ro8:", "Ro16:", "Ro32:", "Ro64:", "Ro8:"]}></InputList>]}></ContentDoubleBrick>
							<ContentDoubleBrick labels={["Type", "Donations"]} firstContent={[<RadioList options={["Money", "Thing", "Money + Thing", "Nothing", "Qualifers"]}></RadioList>]} secondContent={[<RadioList options={["Active", "Not active"]}></RadioList>]}></ContentDoubleBrick>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Voting
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<CheckBox label={"Allow registred users in tournamnet to provide scores for every match"}></CheckBox>
							<CheckBox label={"Allow regsitred users only in their match to provide scores"}></CheckBox>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Additional requirements
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<ContentDoubleBrick labels={["", ""]} firstContent={[<CheckList options={["PSN Account", "Xbox Account", "Steam Account", "League of Legends Account", "Blizzard Account", "Steam Account"]}></CheckList>]} secondContent={[<TagList labels={["Choose country"]}></TagList>, <InputList inputTypes={["text"]} labels={["Min Age:"]}></InputList>]}></ContentDoubleBrick>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Extra
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<ContentBrick label={"Lobby"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentBrick label={"Mode"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentBrick label={"VETO"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentDoubleBrick labels={["Server region", "Platform"]} firstContent={[<InputList inputTypes={["text", "text", "text", "text", "text"]} labels={["europe nordic & east ", "Europe West", "Australia & Oceania", "china", "Asia", "Amercia"]}></InputList>]} secondContent={[<InputList inputTypes={["text", "text", "text", "text", "text"]} labels={["PC", "Xbox one", "ps4", "nintendo switch", "PS5", "Xbox Series X"]}></InputList>]}></ContentDoubleBrick>
							<ContentBrick label={"Discord URL"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentBrick label={"Facebook URL"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentBrick label={"Twitter URL"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentBrick label={"Twitch URL"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
							<ContentBrick label={"Youtube URL"} content={[<InputDef placeholder="" type={"text"}></InputDef>]}></ContentBrick>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Streams
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<ContentBrick label={"Twitch Stream"} content={[<InputDropdown inputPlaceholder={"Twitch Stream"} dropdownPlaceholder={"Language"} inputType={"text"} options={["English", "Polish", "Ukrainian"]}></InputDropdown>]}></ContentBrick>
							<ContentBrick label={"Twitch Stream"} content={[<InputDropdown inputPlaceholder={"Twitch Stream"} dropdownPlaceholder={"Language"} inputType={"text"} options={["English", "Polish", "Ukrainian"]}></InputDropdown>]}></ContentBrick>
							<ContentBrick label={"Twitch Stream"} content={[<InputDropdown inputPlaceholder={"Twitch Stream"} dropdownPlaceholder={"Language"} inputType={"text"} options={["English", "Polish", "Ukrainian"]}></InputDropdown>]}></ContentBrick>
							<GreyButton value={"+ Add Stream"}></GreyButton>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Sponsors
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<ContentBrick label={"Sponsor logo #1"} content={[<UrlBlock inputPlaceholder={"banner url"} buttonValue={"UPLOAD"} inputType={"text"}></UrlBlock>]}></ContentBrick>
							<ContentBrick label={"Sponsor logo #2"} content={[<UrlBlock inputPlaceholder={"banner url"} buttonValue={"UPLOAD"} inputType={"text"}></UrlBlock>]}></ContentBrick>
							<ContentBrick label={"Sponsor logo #3"} content={[<UrlBlock inputPlaceholder={"banner url"} buttonValue={"UPLOAD"} inputType={"text"}></UrlBlock>]}></ContentBrick>
							<GreyButton value={"+ Add Sponsor"}></GreyButton>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
				<MyAccordion>
					<MyAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[500] }} />} aria-controls="panel2-content" id="panel2-header">
						Rules
					</MyAccordionSummary>

					<MyAccordionDetails>
						<MyAccordionDetails>
							<ContentBrick label={"Rules"} content={[<TextArea placeholder="You can write here somebody about your tournament...."></TextArea>]}></ContentBrick>
						</MyAccordionDetails>
					</MyAccordionDetails>
				</MyAccordion>
			</div>
		</div>
	);
};
export default Acordeon;
