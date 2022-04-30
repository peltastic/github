import classes from "../styles/repo.module.css";
import { AiOutlineStar } from "react-icons/ai";
import {IoMdArrowDropdown} from "react-icons/io"
function Repo() {
  return (
    <div className={classes.Repo}>
      <div>
        <div className={classes.Flex}>
          <h1 className={classes.RepoName}>api-design-with-djangorest</h1>
          <p className={classes.Public}>Public</p>
        </div>
        <p className={classes.Desc}>Api design with django framework</p>
        <div className={classes.Details}>
          <p className={classes.Language}>Python</p>
          <div className={classes.Star}>
            <AiOutlineStar />
            <p>1</p>
          </div>
          <p>Updated 5 days ago</p>
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
