import React from 'react'

const SinglePost = (props) => {
    return (
        <>
            <div className="post" style={{ align: "center" }}>
                <blockquote className="instagram-media" data-instgrm-permalink={props.url} data-instgrm-version="14" style={{ "background": "#FFF", "border": "none", "borderRadius": "3px", "boxShadow": "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin": "1px", "maxWidth": "540px", "minWidth": "326px", "padding": "0", "width": "calc(100% - 2px)" }}>
                </blockquote>
            </div>
        </>
    )
}

export default SinglePost;
