import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CodeStock from "../assets/Projects/codestock.png";
import RecipeHunt from "../assets/Projects/recipeHunt.png";
import TypingGame from "../assets/Projects/typingGame.png";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    backgroundColor: theme.palette.lightBlack.main,
    height: "auto",
    marginTop: "3em",
    padding: "5em",
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
      marginBottom: "8em",
      borderBottom: "2px solid black",
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
  desc: {
    paddingBottom: "3em",
  },
  tags: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5em",
    marginBottom: "1.2em",
    flexWrap: "wrap",
    "& > span": {
      background: "#212121",
      padding: "0.6em 1em",
      margin: ".2em 0",
    },
  },
  links: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1em",
    flexWrap: "wrap",
    "& a": {
      color: theme.palette.white.main,
      textDecoration: "none",
      background: "#212121",
      width: "200px",
      padding: "0.6em 3em",
      margin: ".5em 0",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <h2 className={classes.experience}>Projects</h2>
        <h2>Live Projects Done So Far</h2>
      </div>
      <div className={classes.internship}>
        <div className={classes.companyImage}>
          <img src={CodeStock} alt="codestock" />
        </div>
        <div className={classes.companyDisc}>
          <h1>CodeStock Editor</h1>
          <div className={classes.tags}>
            <span>React Js</span>
            <span>Node Js</span>
            <span>CodeMirror</span>
            <span>Noty</span>
            <span>Scss</span>
          </div>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquam eaque voluptate doloremque at culpa iste
            perspiciatis minus. Ipsam dignissimos doloremque, eligendi autem
            pariatur ad laudantium. Neque odit iure provident maxime distinctio
            vitae velit laudantium nihil. Culpa praesentium numquam quasi
            cupiditate nisi optio, quaerat minus aliquam quod provident incidunt
            voluptate.
          </p>
          <div className={classes.links}>
            <a
              href="https://github.com/Abhi204655/CodeStock-Web"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <a
              href="http://codestockide.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
      <div className={classes.internship}>
        <div className={classes.companyImage}>
          <img src={TypingGame} alt="typing game" />
        </div>
        <div className={classes.companyDisc}>
          <h1>TechTypo</h1>
          <div className={classes.tags}>
            <span>React Js</span>
            <span>JSX</span>
            <span>CSS3</span>
          </div>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquam eaque voluptate doloremque at culpa iste
            perspiciatis minus. Ipsam dignissimos doloremque, eligendi autem
            pariatur ad laudantium. Neque odit iure provident maxime distinctio
            vitae velit laudantium nihil. Culpa praesentium numquam quasi
            cupiditate nisi optio, quaerat minus aliquam quod provident incidunt
            voluptate.
          </p>
          <div className={classes.links}>
            <a
              href="https://github.com/Abhi204655/Techtypo-typing-test"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <a
              href="https://techtypo.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
      <div className={classes.internship}>
        <div className={classes.companyImage}>
          <img src={RecipeHunt} alt="recipehunt" />
        </div>
        <div className={classes.companyDisc}>
          <h1>RecipeHunt</h1>
          <div className={classes.tags}>
            <span>React Js</span>
            <span>CSS3</span>
            <span>JSX</span>
            <span>Edamam Api</span>
          </div>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquam eaque voluptate doloremque at culpa iste
            perspiciatis minus. Ipsam dignissimos doloremque, eligendi autem
            pariatur ad laudantium. Neque odit iure provident maxime distinctio
            vitae velit laudantium nihil. Culpa praesentium numquam quasi
            cupiditate nisi optio, quaerat minus aliquam quod provident incidunt
            voluptate.
          </p>
          <div className={classes.links}>
            <a
              href="https://github.com/Abhi204655/RecipeHunt"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <a
              href="https://recipehunt-abhi204655.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
