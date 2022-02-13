import {
  ADD_ORDERS,
  ADD_PAYMENT_METHOD,
  ADD_SHIPPING_ADDRESS,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  RESET_STORAGE,
  RESET_USER,
  SIGN_UP_USER,
  UPDATE_PAYMENT,
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

    case ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case ADD_ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case RESET_STORAGE:
      return {
        ...state,
        basketItems: [],
        shippingAddress: null,
      };

    case UPDATE_PAYMENT:
      let matchId = state.orders.filter((x) => x.id === action.payload.orderId);

      return {
        ...state,
        orders: {
          ...matchId.map(
            ((product) => product.paymentMethod: action.payload.paymentId)
          ),
        },
      };

    default:
      return state;
  }
};
