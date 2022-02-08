import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import Loader from "../Layout/Loader";
import { globalReducers } from "./GlobalReducer";
import {
  ADD_SHIPPING_ADDRESS,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  RESET_USER,
  SIGN_UP_USER,
} from "./Types";

// Initial State
const initialState = {
  loading: true,
  userInfo: null,
  basketItems: localStorage.getItem("basketItems")
    ? JSON.parse(localStorage.getItem("basketItems"))
    : [],
  shippingAddress: localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : null,
};

// create the context
const GlobalContext = createContext();

// use context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// global provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducers, initialState);

  /*============= AUTH ACTIONS =============*/
  // actions: signup user
  const signup = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password);

    // update user name
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    dispatch({
      type: SIGN_UP_USER,
      payload: { ...auth.currentUser },
    });
  };

  // function: signin user
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // function: signout user
  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({
        type: RESET_USER,
        payload: user,
      });
    });
    return () => unsubscribe();
  }, [dispatch]);

  /*============= BASKET ACTIONS =============*/
  // acitons: add to basket
  const addToBasket = (item) => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: item,
    });
  };

  // acitons: remove from basket
  const removeFromBasket = (id) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: id,
    });
  };

  // function: total price
  const getSubTotal = (basketItems) => {
    return basketItems?.reduce((ammount, item) => item.price + ammount, 0);
  };

  // acitons: shipping address
  const getShippingAddress = (address) => {
    dispatch({
      type: ADD_SHIPPING_ADDRESS,
      payload: address,
    });
  };

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify(state.shippingAddress)
    );
  }, [state]);
  // values
  const value = {
    ...state,
    state,
    signup,
    signin,
    signout,
    addToBasket,
    removeFromBasket,
    getSubTotal,
    getShippingAddress,
  };
  return (
    <GlobalContext.Provider value={value}>
      {state.loading ? <Loader /> : children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
