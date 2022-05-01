import classes from "../styles/repo.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscRepoForked } from "react-icons/vsc";
import { timeDifferenceForDate } from "../utils/generateTime";
function Repo(props) {
  let color;
  if (props.lang === "JavaScript") {
    color = "yellow";
  } else if (props.lang === "Go") {
    color = "#1e648c";
  } else if (props.lang === "Python") {
    color = "#1e648c";
  } else if (props.lang === "HTML") {
    color = "salmon";
  } else if (props.lang === "TypeScript") {
    color = "#1a506f";
  } else if (props.lang === "CSS") {
    color = "#2d4655";
  }

  return (
    <div className={classes.Repo}>
      <div>
        <div className={classes.Flex}>
          <h1 className={classes.RepoName}>{props.name}</h1>
          <p className={classes.Public}>Public</p>
        </div>
        <p className={classes.Desc}>{props.desc}</p>
        <div className={classes.Details}>
          <div
            className={classes.Color}
            style={{ backgroundColor: `${color}` }}
          ></div>
          <p className={classes.Language}>
            {props.lang ? props.lang : "Javascript"}
          </p>
          {props.stars ? (
            <div className={classes.Star}>
              <AiOutlineStar />
              <p>{props.stars}</p>
            </div>
          ) : null}
          {props.isForked ? (
            <div className={classes.Fork}>
              <VscRepoForked />
              <p>{props.forks}</p>
            </div>
          ) : null}
          <p>updated {timeDifferenceForDate(props.updatedAt)}</p>
        </div>
      </div>
      <div className={classes.StarBtn}>
        <button>
          <AiOutlineStar />
          <span>Star</span>
          <IoMdArrowDropdown />
        </button>
      </div>
    </div>
  );
}

export default Repo;
