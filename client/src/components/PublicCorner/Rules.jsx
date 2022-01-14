import CSS from './Rules.module.css';

const Rule = ({ props }) => {
    console.log(props);
    return (
        <div className={CSS.ruleBox}>
            <h3 className={CSS.heading}>{props.title}</h3>
            {
                props.rules.map((rule, index) => {
                    return (
                        <p key={index} className={CSS.rule}>
                            <i className={`${CSS.arrow} fas fa-location-arrow`} />
                            {rule}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default Rule;