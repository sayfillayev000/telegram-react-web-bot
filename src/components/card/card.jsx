import React, { useState } from "react";
import "./card.css";
import Button from '../button/Button.jsx';
const index = ({ course, onAddItem, onRemoveItem }) => {
  const [count, setCount] = useState(0);
  const hendleIncrement = () => {
    setCount((prev) => prev + 1);
    onAddItem(course);
  };
  const hendleDecrement = () => {
    setCount((prev) => prev - 1);
    onRemoveItem(course);
  };
  return (
    <div className="card">
      <span className={`${count > 0 ? "card__badge" : "card__badge-hidden"}`}>
        {count}
      </span>
      <div className="image__container">
        <img src={course.Image} alt={course.title} width="100%" />
      </div>
      <div className="card__body">
        <h2 className="card__title">{course.title}</h2>
        <div className="card__price">
          {course.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
      <div className="hr"></div>
      <div className="btn__container">
        <Button title="+" type="add" onClick={hendleIncrement} />
        {count > 0 && (
          <Button title="-" type="remove" onClick={hendleDecrement} />
        )}
      </div>
    </div>
  );
};

export default index;
