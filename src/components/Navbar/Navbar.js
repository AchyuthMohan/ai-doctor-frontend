import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import navIcon from "../../assets/svg/navIcon.svg";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { AiOutlineHome } from "react-icons/ai";
import { GiHospitalCross, GiMedicines, GiBrain } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "../../contexts/UserContext";
const Navbar = () => {
  const { currusername, isAuthenticated } = useContext(UserContext);
  return (
    <div className="nav__holder__out">
      <nav className="nav__main_container">
        <Link to="/">
          <AiOutlineHome size={30} />
          Home
        </Link>
        <Link to="/doctors">
          <GiHospitalCross size={30} />
          Doctors
        </Link>
        <Link to="/medicines">
          <GiMedicines size={30} />
          Medicines
        </Link>
        <Link to="/predict">
          <GiBrain size={30} />
          Predictor
        </Link>
        {isAuthenticated ? (
          <ProfileIcon currusername={currusername}/>
        ) : (
          <Link to="/login">
            <CgProfile size={30} />
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
