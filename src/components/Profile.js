import Header from "./Header";
import UserInfo from "./UserInfo";
import Repos from "./Repos";
import { useUsersQuery, } from "../query/userInfo";
import { useEffect } from "react";
import { setUserInfo } from "../redux/reducers/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Profile() {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const { data, error, isLoading, isSuccess } = useUsersQuery(token); 
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
        })
      );
    }
  }, [data]);
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <UserInfo />
        <Repos loading={isLoading}/>
      </div>
    </>
  );
}

export default Profile;
