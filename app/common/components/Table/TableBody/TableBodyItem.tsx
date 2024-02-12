import React, { useState } from "react";
import TableBodyTag from "./TableBodyTag";
import { useSelector } from "react-redux";

interface Props {
    itemValue: string | string[];
    fieldName: string;
}

export const TableBodyItem: React.FC<Props> = ({ itemValue, fieldName }) => {
    const isEditable = useSelector((state:any) => state.editReducer.isActive);
    const [editedValue, setEditedValue] = useState<string>("");
    console.log("🚀 ~ editedValue:", editedValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedValue(event.target.value);
    };

    const renderValue = (value: string | string[]) => {
        if (typeof value === "string") {
            if (value.length > 30) {
                return value.slice(0, 30) + "...";
            }
            return value;
        } else if (Array.isArray(value)) {
            // Join array of strings with comma separator
            return <TableBodyTag item={value}></TableBodyTag>;
        }
        return value;
    };

    return (
        <td className="table__body-item">
            {isEditable ? (
                <input
                    type="text"
                    value={editedValue}
                    onChange={handleChange}
                    placeholder={String(itemValue)}
                    className="table__body-item-input"
                />
            ) : (
                renderValue(itemValue)
            )}
        </td>
    );
};

