import { Link } from "react-router-dom";
import logo from "../assest/images/Group.svg";
import "./NavbarDown.css";
import { BiSearchAlt } from "react-icons/bi";
import DropDown from "../DropDown/DropDown";
import { useState } from "react";
import facebook from "../assest/images/facebook.svg";
import instagram from "../assest/images/instagram.svg";
import call from "../assest/images/call.svg";
import email from "../assest/images/mail.svg";
import { FaWhatsapp } from "react-icons/fa6";

const NavbarDown = ({handleBrandClick}) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [toggleIcon, setToggleIcon] = useState("toggler-icon");
  const [collapse, setCollapse] = useState("nav-items");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleBrandItemClick = (brand) => {
    handleBrandClick(brand);
    closeDropdown();
  };
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const onToggle = () => {
    collapse === "nav-items"
      ? setCollapse("nav-items nav-collapse")
      : setCollapse("nav-items");

    toggleIcon === "toggler-icon"
      ? setToggleIcon("toggler-icon toggle")
      : setToggleIcon("toggler-icon");
  };
  return (
    <div className="rn-navbar">
      <div className={toggleIcon} onClick={onToggle}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="rn-logo">
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="rn-nav-items">
        <ul className={collapse}>
          <div className="rn-logo">
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>
          <Link
            to="/"
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </Link>
          <Link >
          <DropDown  className={activeLink === "Products" ? "active" : ""} name="Products"
  option1="GreenGold"
  option2="Ogaro"
  option3="Malika"
  option4="Avie"
   handleBrandClick={handleBrandItemClick}/>
</Link>
          <Link
            to="/About"
            className={activeLink === "About" ? "active" : ""}
            onClick={() => handleLinkClick("About")}
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className={activeLink === "Contact" ? "active" : ""}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </Link>
          <Link
            to="/Iso"
            className={activeLink === "Iso" ? "active" : ""}
            onClick={() => handleLinkClick("Iso")}
          >
            Iso
          </Link>

          <div className="rn-icons-social">
            <div className="rn-social-media">
              <Link>
                <img src={facebook} alt="" className="rn-icon" />
              </Link>
              <Link>
                <img src={instagram} alt="" className="rn-icon" />
              </Link>
            </div>

            <div className="rn-coll">
              <Link>
                <img src={call} alt="" className="rn-icon" />
              </Link>
              <p>+963412020</p>
            </div>
            <div className="rn-whatsapp">
              <Link>
                <FaWhatsapp className="rn-icon" />
              </Link>
              <p>+963 994 640000</p>
            </div>
            <div className="rn-emails">
              <Link>
                <img src={email} alt="" className="rn-icon" />
              </Link>
              <p>info@siriaherbs.com</p>
            </div>
          </div>
        </ul>
        <Link>
          <BiSearchAlt />
        </Link>
      </div>
    </div>
  );
};

export default NavbarDown;
