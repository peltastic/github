import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticateQuery } from "../query/auth";
import Spinner from "./Spinner";
import classes from "../styles/authorize.module.css";
function Authorize() {
  const navigate = useNavigate()
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const { data, error, isLoading, isSuccess } = useAuthenticateQuery(code);
  useEffect(() => {
    console.log(data, error, isLoading, isSuccess);
    if (data) {
      sessionStorage.setItem("token", data.access_token)
      navigate("/profile");
    } else if (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <div className={classes.Authorize}>
      {isLoading ? (
        <>
          <p>Authorizing...</p>
          <Spinner />
        </>
      ) : null}
    </div>
  );
}
export default Authorize;
