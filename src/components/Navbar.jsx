import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo@2x.png";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "navbar-wrapper": {
    zIndex: "10",
    padding: "0 2em",
    position: "sticky",
    top: 0,
    transition: "0.4s ease-in",
  },
  navbar: {
    maxWidth: "calc(1100px + 2em)",
    marginInline: "auto",
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2em",
  },
  navlogo: {
    width: "35px",
    height: "35px",
    cursor: "pointer",
    "& > img": {
      width: "100%",
    },
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    gap: "2em",
    "& > a": {
      textDecoration: "none",
      color: theme.palette.white.main,
      fontSize: "1.1em",
      "&:hover": {
        color: theme.palette.gray.main,
      },
    },
  },
  active: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  backdrop: {},
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("nav-scroll");
      document.querySelector(".navbar-inner").classList.add("nav-scroll-inner");
    } else {
      document.querySelector(".navbar").classList.remove("nav-scroll");
      document
        .querySelector(".navbar-inner")
        .classList.remove("nav-scroll-inner");
    }
  };

  return (
    <>
      <div className={`${classes["navbar-wrapper"]} navbar`}>
        <div className={`${classes.navbar} navbar-inner`}>
          <div className={classes.navlogo} onClick={() => history.push("/")}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={classes.navItems}>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
            <NavLink to="/experience" activeClassName={classes.active}>
              Experiences
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
