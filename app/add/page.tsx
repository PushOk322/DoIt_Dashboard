"use client"
import Dashboard from "../common/components/Dashboard/Dashboard";

import InputDef from "../common/ui/Inputs/InputDef";
import Dropdown from "../common/ui/Dropdown/Dropdown";
import CheckBox from "../common/ui/Checkbox/CheckBox";
import GreyButton from "../common/ui/Buttons/GreyButton";
import Anotation from "../common/ui/Anotation/Anotation";
import RadioList from "../common/ui/Radio/RadioList";

import Acordeon from "../common/components/Acordeon/Acordeon";

export default function Home() {
	return (
		<>
			{/* <InputDef type="text"  placeholder="palceholder"></InputDef>
			<Dropdown options={["item1", "item2", "item3"]} ></Dropdown>
			<RadioList options={["item1", "item2", "item3"]}></RadioList>
			<CheckBox label={"Checkbox"}></CheckBox>
			<GreyButton value={"button"}></GreyButton>
			<Anotation value={"dsafasdfasdfasdfasdfasdf"}></Anotation> */}
			<Acordeon></Acordeon>

			{/* <Dashboard></Dashboard> */}
		</>
	);
}
