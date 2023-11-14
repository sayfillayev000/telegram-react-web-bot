import "./button.css";

const Button = ({ type, title, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${
        (type == "add" && type) ||
        (type == "remove" && type) ||
        (type == "checkout" && type)
      } ${disabled  && "disabled"}`}
    >
      {title}
    </button>
  );
};
export default Button;
