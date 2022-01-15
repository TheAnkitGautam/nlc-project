import React from 'react'
import CSS from './Form.module.css';

const InputBox = (props) => {

    const { label, value, pattern, name, placeholder, onChange, type, disabled, required } = props;

    return (
        <div className={CSS.inputBox}>
            <label>{label}</label>
            <input
                name={name}
                value={value}
                type={type}
                pattern={pattern}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        </div >
    )
}

export default InputBox;