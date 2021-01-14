import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Decartem from "../assets/InternshipImages/decartem.png";
import HashBinary from "../assets/InternshipImages/hashBinary.png";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    backgroundColor: theme.palette.lightBlack.main,
    height: "auto",
    marginTop: "3em",
    padding: "5em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
    },
  },
  experience: {
    color: theme.palette.secondary.main,
  },
  internship: {
    width: "100%",
    height: "auto",
    marginTop: "4em",
    borderRadius: "10px",
    "&:not(:last-child)": {
      borderBottom: "2px solid black",
      marginBottom: "8em",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "4em",
      },
    },
  },
  companyImage: {
    width: "100%",
    height: "auto",
    "& > img": {
      width: "100%",
    },
  },
  companyDisc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& > h1": {
      fontSize: "clamp(2em,10vw,3.4em)",
      margin: ".2em 0",
      backgroundClip: "text",
      "-webkit-background-clip": "text",
      background: "linear-gradient(90deg,#828282 33%,#ffffff 66%,#828282 100%)",
      color: "transparent",
    },
  },
  time: {
    color: theme.palette.gray.main,
    marginBottom: "1.2em",
    letterSpacing: "2px",
    wordSpacing: "4px",
  },
  desc: {
    paddingBottom: "3em",
  },
}));

const Internships = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <h2 className={classes.experience}>EXPERIENCE</h2>
        <h2>Internships Done So Far</h2>
      </div>
      <div className={classes.internship}>
        <div className={classes.companyImage}>
          <img src={Decartem} alt="decartem" />
        </div>
        <div className={classes.companyDisc}>
          <h1>Carnot Technologies</h1>
          <p className={classes.time}>Oct 2020 - Present | Full Stack Intern</p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquam eaque voluptate doloremque at culpa iste
            perspiciatis minus. Ipsam dignissimos doloremque, eligendi autem
            pariatur ad laudantium. Neque odit iure provident maxime distinctio
            vitae velit laudantium nihil. Culpa praesentium numquam quasi
            cupiditate nisi optio, quaerat minus aliquam quod provident incidunt
            voluptate.
          </p>
        </div>
      </div>
      <div className={classes.internship}>
        <div className={classes.companyImage}>
          <img src={HashBinary} alt="decartem" />
        </div>
        <div className={classes.companyDisc}>
          <h1>Hashbinary Services LLP</h1>
          <p className={classes.time}>
            Aug 2020 - Oct 2020 | MERN Stack Developer
          </p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquam eaque voluptate doloremque at culpa iste
            perspiciatis minus. Ipsam dignissimos doloremque, eligendi autem
            pariatur ad laudantium. Neque odit iure provident maxime distinctio
            vitae velit laudantium nihil. Culpa praesentium numquam quasi
            cupiditate nisi optio, quaerat minus aliquam quod provident incidunt
            voluptate.
          </p>
        </div>
      </div>
      <div className={classes.internship}>
        <div className={classes.companyImage}>
          <img src={Decartem} alt="decartem" />
        </div>
        <div className={classes.companyDisc}>
          <h1>Decartem</h1>
          <p className={classes.time}>
            Apr 2020 - Aug 2020 | Full Stack Developer
          </p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquam eaque voluptate doloremque at culpa iste
            perspiciatis minus. Ipsam dignissimos doloremque, eligendi autem
            pariatur ad laudantium. Neque odit iure provident maxime distinctio
            vitae velit laudantium nihil. Culpa praesentium numquam quasi
            cupiditate nisi optio, quaerat minus aliquam quod provident incidunt
            voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internships;
