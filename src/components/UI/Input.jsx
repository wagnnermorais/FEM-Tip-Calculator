import "../../styles/Components/Input.css";

const Input = ({
  title,
  type,
  name,
  placeholder,
  icon,
  alt,
  max,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>
        <span className="label">{title}</span>
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={max}
          value={value}
          onChange={onChange}
        />
        <img className="input-icon" src={icon} alt={alt} />
      </label>
    </div>
  );
};

export default Input;
