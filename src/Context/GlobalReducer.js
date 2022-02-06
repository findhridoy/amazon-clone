import { ADD_TO_BASKET, RESET_USER, SIGN_UP_USER } from "./Types";

export const globalReducers = (state, action) => {
  switch (action.type) {
    case SIGN_UP_USER:
      return {
        ...state,
        userInfo: action.payload,
      };

    case RESET_USER:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };

    case ADD_TO_BASKET:
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };

    default:
      return state;
  }
};
