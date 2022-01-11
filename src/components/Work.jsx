import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CgArrowLongRight } from "react-icons/cg";

const useStyles = makeStyles((theme) => ({
  work: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "6em 0",
    textAlign: "center",
    "& > h1": {
      fontSize: "clamp(1.5em,10vw,3em)",
      marginBottom: "0.2em",
      color: theme.palette.white.main,
    },
    "& > p": {
      fontSize: "1.2em",
      color: theme.palette.gray.main,
      marginBottom: "3em",
    },
  },
  outlined: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "230px",
    lineHeight: "40px",
    background: "none",
    outline: "none",
    color: theme.palette.white.main,
    cursor: "pointer",
    gap: ".5em",
    border: `1px solid ${theme.palette.gray.main} !important`,
    fontWeight: "600 !important",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      transition: ".4s",
    },
  },
}));

const Work = () => {
  const classes = useStyles();
  return (
    <div className={classes.work}>
      <h1>Interested in working together?</h1>
      <p>Feel free to contact me for any project or collaboration.</p>
      <button type="button" className={classes.outlined}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ahrefabhi@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          CONTACT ME ANYTIME
        </a>

        <CgArrowLongRight size={23} />
      </button>
    </div>
  );
};

export default Work;
