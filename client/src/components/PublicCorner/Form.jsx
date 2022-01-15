import React, { useState } from 'react'
import InputBox from './InputBox'
import CSS from './Form.module.css';
import { Link } from 'react-router-dom';
import RadioButton from './RadioButton';

export default function Form() {

    const [formdata, setFormdata] = useState({
        regId: "",
        email: "",
        fullName: "",
        contact: "",
        instaId: "",
        linkedIn: "",
        gender: "",
        college: "",
        year: "",
        city: "",
        state: "",
        pinCode: ""
    })

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    const handleRadio = (e) => {
        console.log(e);
        setFormdata({ ...formdata, [e.target.name]: e.target.checked });
    }
    console.log(formdata);
    const form = [
        {
            id: 1,
            name: "regId",
            type: "text",
            placeholder: "",
            className: "regInput",
            label: "Registration ID",
            disabled: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "",
            errMsg: "Enter a valid email address!",
            label: "Email",
            disabled: true,
        },
        {
            id: 3,
            name: "fullName",
            type: "text",
            placeholder: "Enter Your Full Name",
            errMsg: "Name should contain alphabets",
            pattern: "^[a-zA-z\\s]+$",
            label: "Full Name",
            required: true
        },
        {
            id: 50,
            name: "gender",
            type: "radio",
            options: ["Male", "Female", "Others"],
            label: "Gender",
            required: true
        },
        {
            id: 4,
            name: "contact",
            type: "text",
            placeholder: "Enter Your WhatsApp Number",
            pattern: "[6-9]{1}[0-9]{9}",
            label: "WhatsApp Number",
            required: true
        },
        {
            id: 5,
            name: "instaId",
            type: "text",
            placeholder: "Instagram ID",
            label: "Instagram ID",
            required: false
        },
        {
            id: 6,
            name: "linkedIn",
            type: "url",
            placeholder: "LinkedIn URL",
            label: "LinkedIn URL",
            required: false
        },
        {
            id: 9,
            name: "college",
            type: "text",
            placeholder: "Enter Your Institute's Name",
            label: "Institute Name",
            required: true
        },
        {
            id: 10,
            name: "city",
            type: "text",
            placeholder: "Your City",
            label: "City",
            required: true
        },
        {
            id: 11,
            name: "state",
            type: "text",
            placeholder: "State",
            label: "State",
            required: true
        },
        {
            id: 12,
            name: "pinCode",
            type: "text",
            placeholder: "Postal Code",
            label: "PIN Code",
            required: true
        },
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    }

    return (
        <div >
            <h2 className={CSS.title}>Registration Form </h2>
            <form className={CSS.form} onSubmit={handleSubmit}>
                <h3 className={CSS.formTitle}>Winter Debate</h3>
                {
                    form.map((input, index) => {
                        return (
                            input.type === "radio" ?
                                <RadioButton
                                    key={index}
                                    {...input}
                                    onChange={handleRadio} />
                                :
                                <InputBox
                                    key={index}
                                    onChange={handleChange}
                                    {...input}
                                    value={formdata[input.name]}
                                />
                        )
                    })
                }
                <div className={CSS.error}>*Please fill all the form fields</div>
                <div className={CSS.btnBox}>
                    <Link className={CSS.btnPublic} to="/public">Cancel</Link>
                    <button className={CSS.btn} type='submit' >Submit</button>
                </div>
            </form>

        </div>
    )
}
