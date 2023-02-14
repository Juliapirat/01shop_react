import Item from "./Item";
import uuid from "react-uuid";

export default function Items(props) {
  return (
    <main>
      {props.items.map((item) => (
        <Item
          key={uuid()}
          item={item}
          onUpdateData={props.onUpdateData}
          onShowItem={props.onShowItem}
        />
      ))}
    </main>
  );
}
