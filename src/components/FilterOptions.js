import classes from "../styles/filter.module.css";
import Backdrop from "./Backdrop";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import {
  setLanguage,
  setSearchValue,
  setType,
  setSort,
} from "../redux/reducers/filter";
import { ImCheckmark2 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function FilterOptions() {
  const lang = useSelector((state) => state.filter.language);
  const type = useSelector((state) => state.filter.type);
  const sort = useSelector((state) => state.filter.sort);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [position, setPosition] = useState("");
  const setPos = (pos) => {
    setShow(!show);
    if (position) {
      setPosition("");
    } else if (!position) {
      setPosition(pos);
    }
  };
  const onFilter = (action) => {
    dispatch(setLanguage(action));
  };
  const filterType = (action) => {
    dispatch(setType(action));
  };
  const onSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  const onSetSort = (action) => {
    dispatch(setSort(action));
  };
  let filterOptions;
  if (position === "type") {
    filterOptions = (
      <div className={classes.PositionType}>
        <p>Select Type</p>
        <div>
          {type === "all" ? <ImCheckmark2 className={classes.Check} /> : null}
          <p onClick={() => filterType("all")}>All</p>
        </div>
        <div>
          {type === "public" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => filterType("public")}>Public</p>
        </div>
        <div>
          {type === "forks" ? <ImCheckmark2 className={classes.Check} /> : null}
          <p onClick={() => filterType("forks")}>Forks</p>
        </div>
      </div>
    );
  } else if (position === "lang") {
    filterOptions = (
      <div className={classes.PositionLang}>
        <p>Select Language</p>
        <div>
          {lang === "all" ? <ImCheckmark2 className={classes.Check} /> : null}
          <p onClick={() => onFilter("all")}>All</p>
        </div>
        <div>
          {lang === "JavaScript" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => onFilter("JavaScript")}>Javascript</p>
        </div>
        <div>
          {lang === "Go" ? <ImCheckmark2 className={classes.Check} /> : null}
          <p onClick={() => onFilter("Go")}>Go</p>
        </div>
        <div>
          {lang === "CSS" ? <ImCheckmark2 className={classes.Check} /> : null}
          <p onClick={() => onFilter("CSS")}>CSS</p>
        </div>
        <div>
          {lang === "HTML" ? <ImCheckmark2 className={classes.Check} /> : null}
          <p onClick={() => onFilter("HTML")}>HTML</p>
        </div>
        <div>
          {lang === "TypeScript" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => onFilter("TypeScript")}>TypeScript</p>
        </div>
        <div>
          {lang === "Python" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => onFilter("Python")}>Python</p>
        </div>
      </div>
    );
  } else if (position === "sort") {
    filterOptions = (
      <div className={classes.PositionSort}>
        <p>Select Order</p>
        <div>
          {sort === "updated" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => onSetSort("updated")}>Last Updated</p>
        </div>
        <div>
          {sort === "full_name" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => onSetSort("full_name")}>Name</p>
        </div>
        <div>
          {sort === "created" ? (
            <ImCheckmark2 className={classes.Check} />
          ) : null}
          <p onClick={() => onSetSort("created")}>Created</p>
        </div>
      </div>
    );
  }
  return (
    <>
      {show ? <Backdrop clicked={() => setPos("")} /> : null}
      <div className={classes.Filters}>
        <input type="search" onChange={onSearch} />
        <div className={classes.Flex}>
          {filterOptions}

          <button onClick={() => setPos("type")}>
            {" "}
            <span> Type</span> <IoMdArrowDropdown />
          </button>
          <button onClick={() => setPos("lang")}>
            {" "}
            <span>Language</span> <IoMdArrowDropdown />
          </button>
          <button onClick={() => setPos("sort")}>
            {" "}
            <span>Sort</span> <IoMdArrowDropdown />
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterOptions;
