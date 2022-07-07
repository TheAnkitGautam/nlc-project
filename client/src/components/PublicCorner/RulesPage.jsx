import CSS from './Rules.module.css';
import Rule from './Rule';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const rules = [
    {
        id: "1",
        title: "Title",
        rules: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
        ]
    },
    {
        id: "2",
        title: "Title",
        rules: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
        ]
    }
]



const RulesPage = () => {

    const location = useLocation()
    const eventName = location.state;
    console.log(eventName);

    const [check, setCheck] = useState(false);



    const handleRegister = () => {
        localStorage.setItem("eventName", eventName)
        window.open('http://localhost:5000/auth/google', '_self');
    }

    return (
        <div className={CSS.wrapper}>

            <h2 className={CSS.title}>Rules / नियम - {eventName}</h2>

            {
                rules.map((rule) => {
                    return <Rule key={rule.id} props={rule} />
                })
            }

            <div className={CSS.buttons}>

                <div className={CSS.checkbox}>
                    <label htmlFor="accept">
                        <input type="checkbox"
                            name="accept"
                            id='accept'
                            checked={check}
                            onChange={(e) => setCheck(e.target.checked)}
                            required />
                        I accept the rules
                    </label>
                </div>


                <button className={CSS.reg_Btn} onClick={handleRegister} disabled={!check}>
                    Register with Google
                </button>

            </div>
        </div>
    )
}

export default RulesPage;