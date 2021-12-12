import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { ADD_TO_CART } from "../../context/constants";
import "./Product.css";

export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);
  const history = useHistory();
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product_info">
        <p className="product_brand">{product.brand}</p>
        <p className="product_name">{product.name}</p>
        <p className="product_price">₹{product.price}</p>
        <div className="product_size">
          <p className="product_size_heading">Size</p>
          {product.sizes.map((size, i) => (
            <p className="product_size_item" key={size}>
              {i !== 0 && ", "}
              {size}
            </p>
          ))}
        </div>
        <div className="add_to_cart_container">
          <button
            onClick={() => {
              dispatch({ type: ADD_TO_CART, payload: product });
              history.push("/cart");
            }}
            className="add_to_cart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
