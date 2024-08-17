import "./textBox.css";

const TextBox = ({value, onChange}) => {
  return (
    <div>
      <input className="textInput" type="text" value={value} onChange={onChange} maxlength="50" />
    </div>
  );
};

export default TextBox;
