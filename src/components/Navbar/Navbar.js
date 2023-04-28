import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import navIcon from "../../assets/svg/navIcon.svg";
import { AiOutlineHome } from "react-icons/ai";
import { GiHospitalCross, GiMedicines, GiBrain } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="nav__holder__out">
      <div className="nav__main_container">
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
        <Link to="/predictor">
          <GiBrain size={30} />
          Predictor
        </Link>
        <Link to="/profile">
          <CgProfile size={30} />
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
