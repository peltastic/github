import Header from "./Header";
import HeaderMobile from "./HeaderMobile"
import UserInfo from "./UserInfo";
import Repos from "./Repos";
import { useUsersQuery } from "../query/userInfo";
import { useEffect } from "react";
import { setUserInfo } from "../redux/reducers/user";
import { useDispatch } from "react-redux";
import classes from "../styles/profile.module.css"
function Profile() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useUsersQuery(token);
  useEffect(() => {
    if (data) {
      dispatch(
        setUserInfo({
          name: data.name,
          username: data.login,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          location: data.location,
          email: data.email,
          twitter: data.twitter_username,
          avatar: data.avatar_url,
          repos: data.public_repos,
        })
      );
    }
  }, [data]);
  return (
    <>
      <Header />
      <div className={classes.Profile}>
        <UserInfo />
        <HeaderMobile />
        <Repos loading={isLoading} />
      </div>
    </>
  );
}

export default Profile;
