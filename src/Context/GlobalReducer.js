import {
  ADD_SHIPPING_ADDRESS,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  RESET_USER,
  SIGN_UP_USER,
} from "./Types";

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

    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter((x) => x.id !== action.payload),
      };

    case ADD_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
