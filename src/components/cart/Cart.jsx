import { totalPrice } from "../../units/total-price";
import Button from '../button/button';
import "./cart.css";

const Cart = ({ cardItems,onCheckout }) => {
  return (
    <div className="cart__container">
      <p>
        Umumiy narx :
        {totalPrice(cardItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Button
        disabled={cardItems.length == 0 ? true : false}
        title={`${cardItems.length == 0 ? "Buyurtma berish" : "To'lov"}`}
        type="checkout"
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
