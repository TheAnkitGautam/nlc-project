import CSS from './secondaryCard.module.css';

const SecondaryCard = ({ props }) => {
    
    return (
        <div className={CSS.secondary_card}>
            <img src={props.image} alt="" className={CSS.card_img} />
            <h3 className={CSS.name}>{props.name}</h3>
            <h4 className={CSS.post}>{props.post}</h4>
            <div className={CSS.cardSm}>
                <a href={props.instaUrl}><i className="fab fa-instagram" /></a>
                <a href={props.linkdUrl}><i className="fab fa-linkedin-in" /></a>
            </div>
        </div>
    );
}

export default SecondaryCard;