import CSS from './Rules.module.css';
import Rule from './Rule';
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
                <button className={CSS.reg_Btn} onClick={handleRegister}>
                    Register with Google
                </button>

            </div>
        </div>
    )
}

export default RulesPage;