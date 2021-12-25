import React from 'react'
import './posts.css'
import SinglePost from './SinglePost';
import postData from './PostData';

const Post = () => {
    return (
        <section className='post-page'>
            <h1 className="posts-title">Featured Posts</h1>
            <div className='posts'>
                {
                    postData.map((post) => {
                        return <SinglePost key={post.id} url={post.postUrl} />
                    })
                }
            </div>
        </section>
    );
}

export default Post;
