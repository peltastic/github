import Repo from "./Repo";
import classes from "../styles/repos.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userApi } from "../query/userInfo";
import { useDispatch } from "react-redux";
import { setUserRepo } from "../redux/reducers/user";
function Repos() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getRepo();
  }, [user.userInfo.username]);
  const getRepo = async () => {
    if (user.userInfo.username) {
      const result = await dispatch(
        userApi.endpoints.repos.initiate(user.userInfo.username)
      );
      dispatch(setUserRepo(result.data));
    }
  };
  return (
    <div className={classes.Repos}>
      {user.userRepo.map((el, index) => (
        <Repo
          key={index}
          name={el.name}
          desc={el.description}
          lang={el.language}
          stars={el.stargazers_count}
          forks={el.forks_count}
          updatedAt={el.updated_at}
        />
      ))}
    </div>
  );
}

export default Repos;
