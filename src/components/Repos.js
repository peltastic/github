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
  const searchValue = useSelector((state) => state.filter.search_value);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getRepo();
  }, [user.userInfo.username]);
  useEffect(() => {
    onFilter();
  }, [lang]);

  useEffect(() => {
    onSearch();
  }, [searchValue]);
  useEffect(() => {
    filterType();
  }, [type]);

  const onSearch = () => {
    const result = [];
    if (searchValue) {
      for (const el of repos) {
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

  const getRepo = async () => {
    if (user.userInfo.username) {
      const result = await dispatch(
        userApi.endpoints.repos.initiate(user.userInfo.username)
      );
      dispatch(setUserRepo(result.data));
      setRepos(result.data);
    }
  };
  return (
    <div className={classes.Repos}>
      <FilterOptions />
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
    </div>
  );
}

export default Repos;
