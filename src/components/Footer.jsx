import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
        <div>social links</div>
      </div>
    </footer>
  );
};

export default Footer;
