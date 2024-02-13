import React from "react";
import "./Dropdown.scss";

interface DropdownItemProps {
  option: string;
  onSelect: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ option, onSelect }) => {
  return (
    <div className="dropdown-item" onClick={onSelect}>
      {option}
    </div>
  );
};

export default DropdownItem;
