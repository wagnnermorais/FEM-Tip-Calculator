import "../../styles/Components/Button.css";

const Button = ({ type, action, text }) => {
  const handleAction = (event) => {
    action(event);
  };

  return (
    <button className="button" onClick={handleAction} type={type}>
      {text}
    </button>
  );
};

export default Button;
