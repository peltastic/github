import classes from "../styles/login.module.css"
import {BsGithub} from "react-icons/bs"
import {Config} from "../config/config"
function Login() {
  console.log(Config)
  return (
    <div className={classes.Login}>
      <BsGithub className={classes.Icon}/>
      <a className={classes.Link} href={`https://github.com/login/oauth/authorize?client_id=${Config.CLIENT_ID}&redirect_uri=${Config.CALLBACK_URI}`}>
        LOGIN
      </a>
    </div>
  );
}

export default Login;
