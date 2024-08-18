import "./textBox.css";

const TextBox = ({value, placeholder, onChange}) => {
  return (
    <div>
      <input className="textInput" type="text" value={value} onChange={onChange} maxlength="50" placeholder={placeholder}/>
    </div>
  );
};

export default TextBox;
