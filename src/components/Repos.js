import Repo from "./Repo";
import FilterOptions from "./FilterOptions";
import classes from "../styles/repos.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userApi } from "../query/userInfo";
import { useDispatch } from "react-redux";
import { setUserRepo } from "../redux/reducers/user";

function Repos() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.filter.language);
  const type = useSelector((state) => state.filter.type);
  const sort = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.filter.search_value);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (sort) {
      getRepo(sort);
    }
  }, [user.userInfo.username, sort]);
  useEffect(() => {
    onFilter();
  }, [lang]);

  useEffect(() => {
    onSearch();
  }, [searchValue]);
  useEffect(() => {
    filterType();
  }, [type]);

  const getRepo = async (sortVal) => {
    if (user.userInfo.username) {
      const result = await dispatch(
        userApi.endpoints.repos.initiate({
          user: user.userInfo.username,
          sortval: sortVal,
        })
      );
      dispatch(setUserRepo(result.data));
      setRepos(result.data);
    }
  };

  const onSearch = () => {
    const result = [];
    if (searchValue) {
      for (const el of user.userRepo) {
        if (el.name.includes(searchValue)) {
          result.push(el);
        }
      }
      setRepos(result);
    } else {
      setRepos(user.userRepo);
      onFilter();
    }
  };

  const onFilter = () => {
    let result = [];
    for (const el of user.userRepo) {
      if (el.language === lang) {
        result.push(el);
      } else if (lang === "all") {
        result.push(...user.userRepo);
      }
    }
    setRepos(result);
  };
  const filterType = () => {
    if (type === "public") {
      const filter = user.userRepo.filter((el) => !el.private);
      setRepos(filter);
    } else if (type === "forks") {
      const filter = user.userRepo.filter((el) => el.fork);
      setRepos(filter);
    } else {
      setRepos(user.userRepo);
    }
  };
  let loadingJsx = (
    <div style={{ borderBottom: "1px solid #e9e8e8" }}>
      <div
        style={{
          width: "15rem",
          height: ".5rem",
          marginTop: "1rem",
          backgroundColor: "#e9e8e8",
          marginBottom: ".5rem",
        }}
      ></div>
      <div
        style={{
          width: "20rem",
          height: ".4rem",
          backgroundColor: "#e9e8e8",
          marginBottom: "1rem",
        }}
      ></div>
      <div
        style={{
          width: "25rem",
          height: ".5rem",
          backgroundColor: "#e9e8e8",
          marginBottom: "1rem",
        }}
      ></div>
    </div>
  );

  return (
    <div className={classes.Repos}>
      <FilterOptions />
      {repos.length > 1 ? (
        <>
          {repos.map((el, index) => (
            <Repo
              key={index}
              name={el.name}
              desc={el.description}
              lang={el.language}
              stars={el.stargazers_count}
              forks={el.forks_count}
              isForked={el.fork}
              updatedAt={el.updated_at}
            />
          ))}
        </>
      ) : (
        <>
          {loadingJsx}
          {loadingJsx}
          {loadingJsx}
          {loadingJsx}
          {loadingJsx}
          {loadingJsx}
        </>
      )}
    </div>
  );
}

export default Repos;
