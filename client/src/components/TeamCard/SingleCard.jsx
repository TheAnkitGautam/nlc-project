import CSS from './SingleCard.module.css';

const SingleCard = ({ props }) => {
    return (
        <div className={CSS.card}>
            <img className={CSS.card_img} src={props.image} alt="" />
            <div className={CSS.cardDetails}>
                <h3 className={CSS.name}>{props.name}</h3>
                <h4 className={CSS.post}>{props.post}</h4>
                <div className={CSS.cardSm}>
                    <a href={props.instaUrl}><i className="fab fa-instagram" /></a><a href={props.linkdUrl}><i className="fab fa-linkedin-in" /></a>
                </div>
                <p className={CSS.desc}>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default SingleCard;