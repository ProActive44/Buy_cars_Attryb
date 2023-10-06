import {
  GETALLOEM,
  GETCURRCAR,
  GETINVENTORY,
  LOADING,
  LOGINUSER,
  LOGOUT,
} from "./actionTypes";

const initState = {
  Inventory: [],
  currCar: {},
  OEM: [],
  currUser: {},
  totalPages: 0,
  isLogin: false,
  isLoading: true,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  // console.log(payload)
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true, isError: false };

    case LOGINUSER:
      return {
        ...state,
        isLogin: true,
        currUser: payload,
        isLoading: false,
        isError: false,
      };

    case LOGOUT:
      return { ...state, isLogin: false, isLoading: false, isError: false };

    case GETINVENTORY:
      return {
        ...state,
        Inventory: payload.Inventory,
        totalPages: payload.totalCount,
        isLoading: false,
        isError: false,
      };

    case GETCURRCAR:
      return {
        ...state,
        currCar: payload.Inventory,
        isLoading: false,
        isError: false,
      };

    case GETALLOEM:
      return {
        ...state,
        OEM: payload.data,
        totalPages: payload.totalCount,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
