import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
    width: "200px",
    lineHeight: "40px",
    background: "none",
    outline: "none",
    color: theme.palette.white.main,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1em",
    border: `1px solid ${theme.palette.gray.main} !important`,
    fontWeight: "600 !important",
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
        BOOK A FREE CALL
      </button>
    </div>
  );
};

export default Work;
