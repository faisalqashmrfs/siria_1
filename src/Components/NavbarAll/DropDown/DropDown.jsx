// import "./DropDown.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DropDown.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const DropDown = ({ name, option1, option2, option3,option4, handleBrandClick}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleBrandItemClick = (brand) => {
    handleBrandClick(brand);
    closeDropdown();
  };
  return (
    <DropdownButton className="rn-button-dropdown" title={name}  onClick={toggleDropdown}>
         {isDropdownOpen && (
      <ul className="dropdown">
        <Dropdown.Item  onClick={() => handleBrandItemClick('GreenGold')}> 
          <Link to="/Products">{option1}</Link>
        </Dropdown.Item>
        <Dropdown.Item  onClick={() => handleBrandItemClick('Ogaro')}>
          <Link to="/Products">{option2}</Link>
        </Dropdown.Item>
        <Dropdown.Item  onClick={() => handleBrandItemClick('Malika')}>
          <Link to="/Products">{option3}</Link>
        </Dropdown.Item>
        <Dropdown.Item  onClick={() => handleBrandItemClick('Avie')}>
        <Link to="/Products">{option4}</Link>
      </Dropdown.Item>
      </ul>
      )}
    </DropdownButton>
  );
};

export default DropDown;
