import classes from "../styles/userInfo.module.css";
import loadclasses from "../styles/loading.module.css";
import { MdPeopleOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsDot, BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";

function UserInfo() {
  const user = useSelector((state) => state.user.userInfo);
  console.log(user);
  let loadingJsx = (
    <>
      <div className={loadclasses.ImageLoader}></div>
      <div className={loadclasses.MidLoader}></div>
      <div className={loadclasses.ShortLoader}></div>
      <div className={loadclasses.LongLoader}></div>
      <div className={loadclasses.MidLoader}></div>
      <div className={loadclasses.LongLoader}></div>
    </>
  );

  return (
    <div className={classes.UserInfo}>
      {user ? (
        <>
          <div className={classes.ImageContainer}>
            <img className={classes.ProfilePic} src={user.avatar} alt="" />
          </div>
          <h1 className={classes.DisplayName}>{user.name}</h1>
          <p className={classes.UserName}>{user.username}</p>
          <button>follow</button>
          <p className={classes.Bio}>{user.bio}</p>
          <div className={classes.FollowersInfo}>
            <MdPeopleOutline />
            <p>
              <span>{user.followers}</span>followers
            </p>
            <BsDot />
            <p>
              <span>{user.following}</span>following
            </p>
          </div>
          {user.location ? (
            <div className={classes.Flex}>
              <GoLocation className={classes.Icon} />
              <p>{user.location}</p>
            </div>
          ) : null}
          {user.email ? (
            <div className={classes.Flex}>
              <AiOutlineMail className={classes.Icon} />
              <p>{user.email}</p>
            </div>
          ) : null}
          {user.twitter ? (
            <div className={classes.Flex}>
              <BsTwitter className={classes.Icon} />
              <p>@{user.twitter}</p>
            </div>
          ) : null}
        </>
      ) : (
        <>{loadingJsx}</>
      )}
    </div>
  );
}

export default UserInfo;
