import "./textBox.css";

const TextBox = ({value, onChange}) => {
  return (
    <div>
      <input className="textInput" type="text" value={value} onChange={onChange} maxlength="32" />
    </div>
  );
};

export default TextBox;
