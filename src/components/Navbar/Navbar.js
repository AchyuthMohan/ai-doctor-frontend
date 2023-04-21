import { useState, React } from "react";
import { Drawer } from "@mui/material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar_1">
      <div className="nav__desktop">
        <Link to="/" className="nav_item">
          <div className="logo">
            <div className="home_logo"></div>
            <div className="title">AI Doctor</div>
          </div>
        </Link>
        <div className="navbar_items">
          <Link to="/" className="nav_item">
            Home
          </Link>
          <Link to="/doctors" className="nav_item">
            Doctors
          </Link>
          <Link to="/medicines" className="nav_item">
            Medicines
          </Link>
          <Link to="/predictor" className="nav_item">
            Predictor
          </Link>
          <Link to="/login" className="nav_item_mob" spy={true} smooth={true}>
            Login
          </Link>
          <Link to="/profile" className="nav_item_mob" spy={true} smooth={true}>
            Profile
          </Link>
        </div>
      </div>

      <div className="nav__mob">
        <div className="nav__mob_container">
          <div className="title">AI Doctor</div>
          <button className="nav_btn" onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className="hamburger" />
          </button>
        </div>
      </div>
      <Drawer
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className="nav__drawer">
          <div className="nav__drawer_header">
            <div
              className="title_mob"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              AI Doctor
            </div>
            <div
              className="navbar_items_mob"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Link to="/" className="nav_item_mob" onClick={handleDrawerClose}>
                Home
              </Link>
              <Link
                to="/doctors"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Doctors
              </Link>
              <Link
                to="/medicines"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Medicines
              </Link>
              <Link
                to="/predictor"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Predictor
              </Link>

              <Link to="/login" className="nav_item_mob" spy={true} smooth={true}>
                Login
              </Link>
              <Link
                to="/profile"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
