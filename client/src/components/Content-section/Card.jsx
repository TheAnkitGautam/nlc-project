import CSS from './content.module.css'

const Card = () => {
    return (
        <div className={CSS.card}>
            <div className={CSS.card_img}>
                <img src={'https://i.postimg.cc/WbB7KQ7R/post-Img-628b1c8a10021a81a2f1.jpg'} alt="" loading='lazy' />
            </div>
            <div className={CSS.card_content}>
                <h3 className={CSS.card_title}>Fighting Bias with Bias</h3>
                <a className={CSS.postLink} href="/#">Read</a>
            </div>
        </div>
    )
}

export default Card