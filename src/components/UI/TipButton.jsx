import "../../styles/Components/TipButton.css";

const TipButton = ({ type, text, onClick }) => {
  return (
    <button className="tip-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default TipButton;
