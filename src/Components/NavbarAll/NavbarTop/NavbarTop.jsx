import "./TopNavBar.css";
import { Link } from "react-router-dom";
import facebook from "../assest/images/facebook.svg";
import instagram from "../assest/images/instagram.svg";
import call from "../assest/images/call.svg";
import email from "../assest/images/mail.svg";
const NavbarTop = () => {
  return (
    <div className="rn-top-nav">
      <div className="rn-commun">
        <div className="rn-icons-social">
          <Link>
            <img src={facebook} alt="" className="rn-icon" />
          </Link>
          <Link>
            <img src={instagram} alt="" className="rn-icon" />
          </Link>
          <Link>
            <img src={call} alt="" className="rn-icon" />
          </Link>
        </div>
        <p className="p-nav">+963412020</p>
        <div className="rn-emails">
          <Link>
            <img src={email} alt="" className="rn-icon" />
          </Link>
          <p  className="p-nav">info@siriaherbs.com</p>
        </div>
      </div>

      <div className="language">
        <select>
          <option value="En">English</option>
          <option value="Ar">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default NavbarTop;
