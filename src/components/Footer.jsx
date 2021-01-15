import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    background: theme.palette.lightBlack.main,
    height: "250px",
    marginTop: "3em",
  },
  wrapper: {
    width: "80%",
    height: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2em",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
    },
  },
  copy: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
    "& > h1": {
      color: theme.palette.white.main,
    },
    "& > p": {
      color: theme.palette.gray.main,
    },
  },
  socialGroup: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.3em",
    margin: "1em 0",
    "& > a": {
      textDecoration: "none",
      color: theme.palette.white.main,
      fontSize: "1.8em",
    },
  },
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5em",
    "& > a": {
      textDecoration: "none",
      color: theme.palette.gray.main,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.white.main,
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.copy}>
          <h1>ABHI KUMAR</h1>
          <p>
            Copyright &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
        <div className={classes.socialGroup}>
          <div className={classes.social}>
            <a
              href="https://angel.co/u/abhi-kumar-18"
              target="_blank"
              rel="noreferrer"
            >
              <FaAngellist />
            </a>
            <a
              href="https://www.linkedin.com/in/ahrefabhi/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com/abhi_kr15/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://github.com/Abhi204655"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className={classes.contact}>
            <a href="tel:9779807054">+91 97798-07054</a> |{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ahrefabhi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ahrefabhi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
