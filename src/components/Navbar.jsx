import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo@2x.png";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2em 0",
  },
  navlogo: {
    width: "50px",
    height: "50px",
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
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.navlogo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={classes.navItems}>
        <a href="!#">Projects</a>
        <a href="!#">Internships</a>
      </div>
    </div>
  );
};

export default Navbar;
