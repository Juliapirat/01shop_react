export default function Item(props) {
  return (
    <div className="item">
      <img
        src={props.item.image}
        alt={props.item.title}
        onClick={() => props.onShowItem(props.item)}
      />
      <h2>{props.item.title}</h2>
      <div className="item_menu">
        <div className="item_price">
          <b>{props.item.price}$</b>
        </div>
        <div
          className="add_to_cart"
          onClick={() => {
            props.onUpdateData(props.item);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}
