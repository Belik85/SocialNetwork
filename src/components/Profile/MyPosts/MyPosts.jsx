import React from 'react';
import d from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = () => {

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={d.posts}>
                <Post message="Hi,how are you?"  likesCount = "15"/>
                <Post message="What is your name?" likesCount = "15"/>
                <Post message="Tell me about yourself?" likesCount = "15"/>

            </div>
        </div>
    )
}



export default MyPosts;







