import { LOGINUSER, LOGOUT } from "./actionTypes";

const initState = {
  currUser: {},
  isLogin: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGINUSER:
      return { ...state, isLogin: true, currUser: payload };

    case LOGOUT:
      return { ...state, isLogin: false };

    default:
      return state;
  }
};
