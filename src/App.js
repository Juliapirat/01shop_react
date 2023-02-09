import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((response) => {
        return response.json();
      })
      .then(
        (data) =>
          setItems(data) &
          data.forEach((el) => {
            el.count = 1;
          })
      )
      .catch((err) => console.error(err));
  }, []);

  function updateData(item) {
    let isInArray = false;
    console.log(order);
    order.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
        setOrder((order) =>
          order.map((el) =>
            el.id === item.id ? { ...el, count: el.count++ } : el
          )
        );
      }
    });
    if (!isInArray) {
      setOrder([...order, item]);
    }
  }

  function deleteCardOrder(id) {
    setOrder(order.filter((el) => el.id !== id));
  }

  function addCountCart(id) {
    setOrder((order) =>
      order.map((el) => (el.id === id ? { ...el, count: el.count++ } : el))
    );
  }
  function deleteCountCart(id) {
    setOrder((order) =>
      order.map((el) => (el.id === id ? { ...el, count: el.count-- } : el))
    );
  }

  return (
    <div className="wrapper">
      <Header
        order={order}
        onDelete={deleteCardOrder}
        onAddCountCart={addCountCart}
        onDeleteCountCart={deleteCountCart}
      />
      <Items items={items} onUpdateData={updateData} />
      <Footer />
    </div>
  );
}

export default App;
