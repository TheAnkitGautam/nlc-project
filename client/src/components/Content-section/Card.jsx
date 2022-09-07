import CSS from './content.module.css'

const Card = ({ post }) => {
    return (
        <div className={CSS.card}>
            <div className={CSS.card_img}>
                <img src={post.imgUrl} alt={post.title} loading='lazy' />
            </div>
            <div className={CSS.card_content}>
                <h3 className={CSS.card_title}>{post.title}</h3>
                <a className={CSS.postLink} target='_blank' rel="noreferrer" href={post.instaUrl}>Read</a>
            </div>
        </div>
    )
}

export default Card