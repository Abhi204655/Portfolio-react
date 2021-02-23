import React from "react";
// import ProfilePhoto from "../assets/Profile-Image@2x.png";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import Resume from "../assets/Abhi-Resume.pdf";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
import ProfileBig from "../assets/Profile-Image-Big.png";
import ProfileTiny from "../assets/Profile-Image-tiny.png";
import { useProgressiveImg } from "../hooks";

const useStyles = makeStyles((theme) => ({
  hero: {
    width: "100%",
    minHeight: "80vh",
    // background: "red",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3em",
    margin: "3em 0",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  heroLeft: {
    flex: 1,
    "& > h2": {
      fontSize: "clamp(1em,10vw2em)",
      fontWeight: "bolder",
      backgroundClip: "text",
      "-webkit-background-clip": "text",
      background: "linear-gradient(90deg,#828282 33%,#ffffff 66%,#828282 100%)",
      color: "transparent",
    },
    "& > h3": {
      fontSize: "clamp(1.5em,10vw,3em)",
      fontWeight: "normal",
      margin: ".5em 0",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.3em",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flex: 0,
      order: 2,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  buttons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "2em",
    margin: "2em 0",
    "& > button": {
      width: "200px",
      lineHeight: "40px",
      background: "none",
      outline: "none",
      border: "none",
      color: theme.palette.white.main,
      cursor: "pointer",
      fontWeight: "bolder",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1em",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  outlined: {
    border: `1px solid ${theme.palette.gray.main} !important`,
    fontWeight: "600 !important",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      transition: ".4s",
    },
  },
  heroRight: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flex: 0,
      order: 1,
      width: "100%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    // [theme.breakpoints.down("md")]: {
    //   //   flexDirection: "column",
    //   //   background: "red",
    //   order: 1,
    //   width: "100%",
    //   margin: "auto",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    // },
    "& > img": {
      maxWidth: "500px",
      width: "100%",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  const history = useHistory();
  const [src, blur] = useProgressiveImg(ProfileTiny, ProfileBig);

  const downloadResume = () => {
    let filename = "Abhi-Resume.pdf";
    let file = Resume;
    saveAs(file, filename);
  };

  return (
    <div className={classes.hero}>
      <div className={classes.heroLeft}>
        <h2>HI, I'M ABHI KUMAR</h2>
        <h3>I am a MERN Stack Developer and I Love Working on Cool Stuff.</h3>
        <div className={classes.buttons}>
          <button
            type="button"
            className={classes.outlined}
            onClick={() => downloadResume()}
          >
            DOWNLOAD RESUME <AiOutlineDownload />
          </button>
          <button type="button" onClick={() => history.push("/projects")}>
            VIEW PROJECTS
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <div className={classes.heroRight}>
        <img
          src={src}
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Hero;
