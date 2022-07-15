import CSS from './content.module.css'
import postImg from './postImg.jpg'

const Card = () => {
    return (
        <div className={CSS.card}>
            <div className={CSS.card_img}>
                <img src={postImg} alt="" loading='lazy' />
            </div>
            <div className={CSS.card_content}>
                <h3 className={CSS.card_title}>Fighting Bias with Bias</h3>
                <a className={CSS.postLink} href="/#">Read</a>
            </div>
        </div>
    )
}

export default Card