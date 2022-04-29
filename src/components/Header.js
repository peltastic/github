import classes from "../styles/header.module.css";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine, RiStarSLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
function Header() {
  return (
    <div className={classes.Header}>
      <ul>
        <li>
          <button>
            <BsBook />
            <p>Overview</p>
          </button>
        </li>
        <li>
          <button style={{ borderBottom: "2px solid salmon" }}>
            <RiGitRepositoryLine />
            <p>Repositories</p>
            <p className={classes.Count}>347</p>
          </button>
        </li>
        <li>
          <button>
            <AiOutlineProject />
            <p>Projects</p>
          </button>
        </li>
        <li>
          <button>
            <FiPackage />
            <p>Packages</p>
          </button>
        </li>
        <li>
          <button>
            <RiStarSLine />
            <p>Stars</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
