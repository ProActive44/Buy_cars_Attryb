import { GETINVENTORY, LOGINUSER, LOGOUT } from "./actionTypes";

const initState = {
  Inventory: [],
  currUser: {},
  totalPages: 0,
  isLogin: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  // console.log(payload)
  switch (type) {
    case LOGINUSER:
      return { ...state, isLogin: true, currUser: payload };

    case LOGOUT:
      return { ...state, isLogin: false };

    case GETINVENTORY:
      return {
        ...state,
        Inventory: payload.Inventory,
        totalPages: payload.totalPages,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
