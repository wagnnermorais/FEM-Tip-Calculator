import "../styles/Components/Logo.css";

const Logo = ({ source, text }) => {
  return (
    <div className="logo">
      <img className="logo" src={source} alt={text} />
    </div>
  );
};

export default Logo;
