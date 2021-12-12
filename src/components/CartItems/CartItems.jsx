import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {
  REMOVE_FROM_CART,
  INCREMENT_ITEM_COUNT,
  DECREMENT_ITEM_COUNT,
  MOVE_TO_SAVED,
  ADD_TO_SAVED,
} from "../../context/constants";

export default function CartItems() {
  const { state } = useContext(CartContext);
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <h2>My Cart</h2>
      <div>{state.cart.length === 0 && "No products in the cart"}</div>
      <div>
        {state.cart.map((item) => (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <img width={"150px"} src={item.imageUrl} alt={item.name} />
            <div>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: DECREMENT_ITEM_COUNT, payload: item })
                  }
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  onClick={() =>
                    dispatch({ type: INCREMENT_ITEM_COUNT, payload: item })
                  }
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: ADD_TO_SAVED, payload: item })}
              >
                Save for later
              </button>
              <button
                onClick={() =>
                  dispatch({ type: REMOVE_FROM_CART, payload: item })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
