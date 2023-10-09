import "../../styles/Components/Button.css";

const Button = ({ type, onClick, text }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
