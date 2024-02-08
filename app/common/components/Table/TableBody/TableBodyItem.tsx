// TableBodyItem.tsx
import React from "react";

interface Props {
  item: any;
}

const TableBodyItem: React.FC<Props> = ({ item }) => {
  return (
    <tr className="table__body-row">
      {Object.keys(item).map((key, index) => (
        <td className="table__body-item" key={index}>{item[key]}</td>
      ))}
    </tr>
  );
};

export default TableBodyItem;
