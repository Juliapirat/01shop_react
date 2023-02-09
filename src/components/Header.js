import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order.js";
import uuid from "react-uuid";

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  function handlerOnClick() {
    setCartOpen(!cartOpen);
  }

  let sum = 0;
  props.order.forEach((i) => (sum += i.price * i.count));

  let sumItems = 0;
  props.order.forEach((i) => (sumItems += i.count));

  useEffect(() => {
    const timerId = setTimeout(() => {
      document.getElementById("cart").classList.add("slow");
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  });
  function showOrder(props) {
    return (
      <div id="itemsSet">
        {props.order.map((el) => (
          <Order
            key={uuid()}
            item={el}
            onDelete={props.onDelete}
            onAddCountCart={props.onAddCountCart}
            onDeleteCountCart={props.onDeleteCountCart}
          />
        ))}
        <div className="cartSum">
          <div>
            <h2>Sub total:</h2>
          </div>
          <div>
            <b>{sum.toFixed(2)}$</b>
          </div>
        </div>
        <div className="cartMenu">
          <button>VIEW BAG</button>
          <button>CHECKOUT</button>
        </div>
      </div>
    );
  }
  function showNothing() {
    return (
      <p className="empty">
        <h2>Товары в корзине отсутвуют</h2>
      </p>
    );
  }
  return (
    <header>
      <div className="info">
        <span className="logo">WoW Store</span>
        <div className="nav">
          <ul className="menu">
            <li>Contacts</li>
            <li>About Us</li>
            <li>Delivery & returns</li>
          </ul>
          <FaShoppingCart
            className={`cart_icon ${sumItems > 0 && "active"}`}
            onClick={handlerOnClick}
          />
          <div className="items_sum">{sumItems}</div>
        </div>
        {cartOpen && (
          <div className="shop-cart" id="cart">
            {props.order.length > 0 ? showOrder(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="offers">Promo today: MAY56</div>
      <div className="banner"></div>
    </header>
  );
}
