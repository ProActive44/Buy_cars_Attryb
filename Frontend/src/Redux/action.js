import axios from "axios";
import { LOGINUSER, LOGOUT } from "./actionTypes";

let mainURL = import.meta.env.VITE_REACT_APP_SERVER_URL;

export let signUpNewUser =
  (user, goToLogin, accountCreated, wrongDetails) => (dispatch) => {

    axios
      .post(`${mainURL}/user/signup`, user)
      .then((res) => {
        if (res.status === 401 || res.status === 400) {
          wrongDetails(res.data.msg);
        } else {
          goToLogin();
          accountCreated();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.msg) {
          wrongDetails(err.response.data.msg);
        } else {
          wrongDetails();
        }
      });
  };

export let loginNewUser =
  (user, navigate, loginSuccess, wrongDetails) => (dispatch) => {
    axios
      .post(`${mainURL}/user/login`, user)
      .then((res) => {
        if (res.status === 401 || res.status === 400) {
          wrongDetails(res.data.msg);
        } else {
          dispatch({ type: LOGINUSER, payload: res.data.user });
          let token = res.data.token;
          localStorage.setItem("token", token);
          loginSuccess();
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.msg) {
          wrongDetails(err.response.data.msg);
        } else {
          wrongDetails();
        }
      });
  };

export let logOut = (dispatch)=>{
    localStorage.removeItem("token");
    dispatch({type:LOGOUT})
}
