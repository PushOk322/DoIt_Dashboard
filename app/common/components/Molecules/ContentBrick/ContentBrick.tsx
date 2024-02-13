import React from "react";
import "./ContentBrick.scss";

interface Props {
	label: string;
	content?: React.ReactNode[];
}

const ContentBrick: React.FC<Props> = ({ label, content }) => {
	return (
		<div className="content-brick">
			<div className="content-brick__label">{label}</div>
			<div className="content-brick__content">
				{content &&
					content.map((component, index) => (
						<div key={index} className="content-brick__content">
							{component}
						</div>
					))}
			</div>
		</div>
	);
};

export default ContentBrick;
