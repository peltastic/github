import classes from "../styles/backdrop.module.css";

function Backdrop({ clicked }) {
  return <div onClick={clicked} className={classes.Backdrop}></div>;
}

export default Backdrop;
