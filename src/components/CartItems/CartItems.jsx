import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {
  REMOVE_FROM_CART,
  INCREMENT_ITEM_COUNT,
  DECREMENT_ITEM_COUNT,
  ADD_TO_SAVED,
} from "../../context/constants";
import "./CartItems.css";

export default function CartItems() {
  const { state } = useContext(CartContext);
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <h2>My Cart</h2>
      <div>{state.cart.length === 0 && "No products in the cart"}</div>
      <div>
        {state.cart.map((item) => (
          <div className="cart_item_container" key={item.id}>
            <div>
              <img width={"100px"} src={item.imageUrl} alt={item.name} />
            </div>
            <div
              style={{
                paddingLeft: "1rem",
              }}
            >
              <p>{item.name}</p>
              <div className="cart_button_container">
                <div>
                  <button
                    className="inc_button"
                    onClick={() =>
                      dispatch({ type: DECREMENT_ITEM_COUNT, payload: item })
                    }
                  >
                    -
                  </button>
                  <span className="cart_item_count">{item.count}</span>
                  <button
                    className="inc_button"
                    onClick={() =>
                      dispatch({ type: INCREMENT_ITEM_COUNT, payload: item })
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="cart_button"
                  onClick={() =>
                    dispatch({ type: ADD_TO_SAVED, payload: item })
                  }
                >
                  Save for later
                </button>
                <button
                  className="cart_button"
                  onClick={() =>
                    dispatch({ type: REMOVE_FROM_CART, payload: item })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
