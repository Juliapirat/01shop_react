import { FaRegWindowClose } from "react-icons/fa";

export default function ShowItem(props) {
  return (
    <div className="show_item">
      <div>
        <img
          src={props.item.image}
          alt={props.item.title}
          onClick={() => props.onShowItem(props.item)}
        />
        <div>
          <FaRegWindowClose
            className="hide_item"
            onClick={() => {
              props.onHideItem();
            }}
          />
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
          <div className="show_item_menu">
            <div className="show_item_price">
              <b>{props.item.price}$</b>
            </div>
            <div
              className="show_item_to_cart"
              onClick={() => {
                props.onUpdateData(props.item);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
