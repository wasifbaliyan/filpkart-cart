import React from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM_COUNT,
  DECREMENT_ITEM_COUNT,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
  MOVE_TO_CART,
  MOVE_TO_SAVED,
} from "./constants";
import {
  addToCart,
  addToSaved,
  decrementItemCount,
  incrementItemCount,
  removeFromCart,
  removeFromSaved,
} from "./utils";

export const CartContext = React.createContext();

export const initialState = {
  cart: [],
  saved: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case MOVE_TO_CART:
      return initialState;
    case INCREMENT_ITEM_COUNT:
      return incrementItemCount(state, action.payload);
    case DECREMENT_ITEM_COUNT:
      return decrementItemCount(state, action.payload);
    case ADD_TO_SAVED:
      return addToSaved(state, action.payload);
    case REMOVE_FROM_SAVED:
      return removeFromSaved(state, action.payload);
    default:
      return state;
  }
};
