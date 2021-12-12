import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";
import { REMOVE_FROM_SAVED, MOVE_TO_CART } from "../../context/constants";
import "./SavedItems.css";

export default function SavedItems() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <h2>Saved For Later</h2>
      <div>{state.saved.length === 0 && "No items in saved later"}</div>
      <div>
        {state.saved.map((item) => (
          <div className="saved_item_container" key={item.id}>
            <div>
              <img width={"100px"} src={item.imageUrl} alt={item.name} />
            </div>
            <div
              style={{
                paddingLeft: "1rem",
              }}
            >
              <p>{item.name}</p>

              <div>
                <button
                  className="saved_button"
                  onClick={() =>
                    dispatch({ type: MOVE_TO_CART, payload: item })
                  }
                >
                  Move to cart
                </button>
                <button
                  className="saved_button"
                  onClick={() =>
                    dispatch({ type: REMOVE_FROM_SAVED, payload: item })
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
