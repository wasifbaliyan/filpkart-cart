import React from "react";
import CartItems from "../../components/CartItems/CartItems";
import SavedItems from "../../components/SavedItems/SavedItems";

export default function Cart() {
  return (
    <div className="cart">
      <section className="cart_main">
        <CartItems />
      </section>
      <aside className="cart_sidebar">
        <SavedItems />
      </aside>
    </div>
  );
}
