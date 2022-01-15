import React from 'react'
import CSS from './Form.module.css';

const RadioButton = (props) => {

    return (
        <div className={CSS.radioBox}>
            <label className={CSS.radioLabel}>{props.label}</label>
            <div className={CSS.options}>
                {
                    props.options.map((option, index) => {
                        return (
                            <label key={index} htmlFor={option} onChange={props.onChange}>
                                <input type="radio" name={props.label} id={option} />
                                {option}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RadioButton
