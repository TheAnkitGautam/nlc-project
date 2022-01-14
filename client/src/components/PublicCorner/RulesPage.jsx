import CSS from './Rules.module.css';
import Rules from './Rules';

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
    return (
        <div className={CSS.wrapper}>
            <h2 className={CSS.title}>Rules / नियम </h2>
            {
                rules.map((rule) => {
                    return <Rules key={rule.id} props={rule} />
                })
            }
            <a href="/#">Register</a>
        </div>
    )
}

export default RulesPage;
