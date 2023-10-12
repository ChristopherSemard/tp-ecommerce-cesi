import "../../styles/Input/Input.css";

function Input({ type, value, onChange }) {
    return (
        <input
            className="form-input"
            type={type}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
