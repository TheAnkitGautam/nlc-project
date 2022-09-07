import CSS from './Rules.module.css';


const Rule = ({ title, rules }) => {

    return (
        <div className={CSS.ruleBox}>
            <h3 className={CSS.heading}>{title}</h3>
            {
                rules?.map((rule, index) => {
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