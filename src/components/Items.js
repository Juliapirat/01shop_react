import Item from "./Item";
import uuid from "react-uuid";
import ShowItem from "./ShowItem";

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
