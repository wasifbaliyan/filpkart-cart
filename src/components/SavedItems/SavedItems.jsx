import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";
import { REMOVE_FROM_SAVED, MOVE_TO_CART } from "../../context/constants";

export default function SavedItems() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <h2>Saved For Later</h2>
      <div>{state.saved.length === 0 && "No items in saved later"}</div>
      <div>
        {state.saved.map((item) => (
          <div>
            <h5>{item.name}</h5>
            <img width={"150px"} src={item.imageUrl} alt={item.name} />
            <div>
              <button
                onClick={() => dispatch({ type: MOVE_TO_CART, payload: item })}
              >
                Move to cart
              </button>
              <button
                onClick={() =>
                  dispatch({ type: REMOVE_FROM_SAVED, payload: item })
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
