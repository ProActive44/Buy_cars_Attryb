import axios from "axios";
import { GETINVENTORY, LOGINUSER, LOGOUT } from "./actionTypes";

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

// export const getCurrentUser = (currUser)=> async (dispatch) => {
//   try {
//     const response = await axios.get(`${mainUrl}/signup/getuser`, currUser);
//     if (response.data.msg === "User Found") {
//       const user = response.data.user;
//       dispatch(loginUserAction(user));
//       localStorage.setItem("userEmail", JSON.stringify(user.email));
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     // Handle login failure due to a network error or server issue
//     return "failed";
//   }
// };

export let logOut = (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};

// marketspace Inventory

export const getAllInventory = (search="") => (dispatch) => {

  let token = localStorage.getItem("token");
  const headers = {
    authorization: `Bearer ${token}`,
  };

  axios
    .get(`${mainURL}/marketPlace?page=1&q=${search}`, { headers })
    .then((res) => {
      dispatch({ type: GETINVENTORY, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
