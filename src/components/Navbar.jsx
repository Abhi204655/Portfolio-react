import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/Logo@2x.png";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2em 0",
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
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.navbar}>
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
  );
};

export default Navbar;
