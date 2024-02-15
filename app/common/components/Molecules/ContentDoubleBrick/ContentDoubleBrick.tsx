import React from "react";
import "./ContentDoubleBrick.scss";

import ContentBrick from "../ContentBrick/ContentBrick";

interface Props {
	labels: string[];
	firstContent?: React.ReactNode[];
	secondContent?: React.ReactNode[];
}

const ContentDoubleBrick: React.FC<Props> = ({ labels, firstContent,secondContent }) => {
	return (
		<div className="content-double-brick">
			<ContentBrick label={labels[0] } content={firstContent}></ContentBrick>
			<ContentBrick label={labels[1] } content={secondContent}></ContentBrick>
		</div>
	);
};

export default ContentDoubleBrick;
