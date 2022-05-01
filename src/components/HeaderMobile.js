import classes from "../styles/headmobile.module.css";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineProject, AiOutlineStar } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { useSelector } from "react-redux";
function HeaderMobile() {
  const user = useSelector((state) => state.user.userInfo);
  return (
    <div className={classes.HeaderMobile}>
      <ul>
        <li>
          <button>
            <BsBook />
            <p>Overview</p>
          </button>
        </li>
        <li>
          <button style={{ borderBottom: "2px solid salmon",}}>
            <RiGitRepositoryLine />
            <p>Repositories</p>
            {user.repos ? <p className={classes.Count}>{user.repos}</p> : null}
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
            <AiOutlineStar />
            <p>Stars</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMobile;
