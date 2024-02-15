// TableHeadItem.tsx
import React, { useState } from "react";
import "./TagList.scss";

import Tag from "@/app/common/ui/Tag/Tag";

interface Props {
	labels: string[];
}

const TagList: React.FC<Props> = ({ labels }) => {
	const [active, setActive] = useState<string>(labels[0]);

	return (
		<div className="tag-list"> 
			{labels.map((label, index) => {
				return <Tag label={label} isActive={label === active && true} key={index} setActive={setActive}></Tag>;
			})}
		</div>
	);
};

export default TagList;
