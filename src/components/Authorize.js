import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux"
import { setToken } from "../redux/reducers/token";
import { useAuthenticateQuery } from "../query/auth";
function Authorize() {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const { data, error, isLoading, isSuccess } = useAuthenticateQuery(code);
  useEffect(() => {
    // authorize()
    console.log(data, error, isLoading, isSuccess);
    if (data) {
      dispatch(setToken(data.access_token));
      navigate("/profile")
    }
  }, [data]);
  return (
    <div className="">
        authenticate...
    </div>
  );
}
export default Authorize;
