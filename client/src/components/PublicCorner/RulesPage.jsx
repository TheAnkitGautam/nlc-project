import CSS from './Rules.module.css';
import Rules from './Rules';
import { useState } from 'react';
import axios from 'axios';


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

    const [check, setCheck] = useState(false);

    const handleRegister = async () => {
        window.open('http://localhost:5000/auth/google', '_blank');
        // console.log("Hello");

        const ress = await axios.get('/auth/google');
        console.log(ress);
    }

    return (
        <div className={CSS.wrapper}>

            <h2 className={CSS.title}>Rules / नियम</h2>

            {
                rules.map((rule) => {
                    return <Rules key={rule.id} props={rule} />
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


                <button onClick={handleRegister} disabled={!check}>Register with Google</button>


            </div>
        </div>
    )
}

export default RulesPage;