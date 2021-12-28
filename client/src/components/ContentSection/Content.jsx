import React from 'react'
import './content.css'
import contentData from './ContentData';

const Content = () => {
    return (
        <>
            <h2 className="post-title">Featured Content</h2>
            <div className="grid-container" >
                <div className="content-wrap">
                    {
                        contentData.map((post) => {
                            return (
                                <div key={post.index} className={`post${post.index} single-content bg-img`} style={{ backgroundImage: `url(${post.postImg})` }}>
                                    <div className="post-content" >
                                        <h4 className='post-heading'>{post.title}</h4>
                                        <div className="post-writer"><span className='author'>Author: </span><span>{post.author}</span></div>
                                        <a href={post.postUrl} rel="noreferrer" target="_blank" className='view-post'>View Post</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}
export default Content;
