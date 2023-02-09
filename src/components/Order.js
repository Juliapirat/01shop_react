import { FaTrashAlt } from "react-icons/fa";

export default function Order(props) {
  return (
    <div className="item" id="cart">
      <div className="item_img">
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div className="order_item">
        <h2>{props.item.title}</h2>
        <div className="counterCart">
          <button
            className="btn_count_cart"
            onClick={() => props.onAddCountCart(props.item.id)}
          >
            +
          </button>
          <p className="btn_counter">{props.item.count}</p>
          <button
            className="btn_count_cart"
            disabled={props.item.count > 1 ? false : true}
            onClick={() => props.onDeleteCountCart(props.item.id)}
          >
            -
          </button>
        </div>
        <div className="item_price">
          <b>{props.item.price}$</b>
          <FaTrashAlt
            className="delete_icon"
            onClick={() => props.onDelete(props.item.id)}
          />
        </div>
      </div>
      <hr style={{ margin: "20px 10px", opacity: "0.4" }} />
    </div>
  );
}
