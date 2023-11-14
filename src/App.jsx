import { useEffect, useState } from "react";
import { Card } from "./components";
import Cart from "./components/cart/Cart";
import { getData } from "./constants/db";

const telegram = window.Telegram.WebApp;
//sdrwtrhytjyj
const App = () => {
  useEffect(() => {
    telegram.ready();
  });
  const [cardItems, setCardItems] = useState([]);
  const onAddItem = (item) => {
    const existItem = cardItems.find((c) => c.id == item.id);
    console.log(existItem);
    if (existItem) {
      const data = cardItems.map((c) =>
        c.id == item.id
          ? { ...existItem, quantity: existItem.quantity + 1 }
          : c,
      );
      setCardItems(data);
    } else {
      const newData = [...cardItems, { ...item, quantity: 1 }];
      console.log(newData);
      setCardItems(newData);
    }
  };
  const onRemoveItem = (item) => {
    const existItem = cardItems.find((c) => c.id == item.id);
    console.log("existItem", existItem);
    if (existItem.quantity == 1) {
      const newData = cardItems.filter((c) => c.id != existItem.id);
      console.log("newDat", newData);

      setCardItems(newData);
    } else {
      const newData = cardItems.map((c) =>
        c.id == existItem.id
          ? { ...existItem, quantity: existItem.quantity - 1 }
          : c,
      );
      console.log("newData", newData);

      setCardItems(newData);
    }
  };

  const onCheckout = () => {
    telegram.MainButton.text = "Sotib olish :)";
    telegram.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Muhammad kurlari</h1>
      <Cart cardItems={cardItems} onCheckout={onCheckout}/>
      <div className="cars__container">
        {getData.map((course) => (
          <Card
            key={course.id}
            course={course}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </>
  );
};

export default App;
