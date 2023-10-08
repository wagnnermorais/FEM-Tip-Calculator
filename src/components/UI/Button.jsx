import "../../styles/Components/Button.css";

const Button = ({ type, onClick, text }) => {
  return (
    <button className="button-disabled" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
