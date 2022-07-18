import CSS from './Rules.module.css';


const Rule = ({ props }) => {

    return (
        <div className={CSS.ruleBox}>
            <h3 className={CSS.heading}>{props.title}</h3>
            {
                props.rules.map((rule, index) => {
                    return (
                        <p key={index} className={CSS.rule}>
                            <i className={`${CSS.arrow} fa-solid fa-circle`} />
                            {rule}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default Rule;