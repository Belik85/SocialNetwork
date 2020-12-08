import React from 'react';
import d from './MyPosts.module.css'
import Post from './Post/Post'



const  MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message = {p.message}  likesCount = {p.likesCount}/>)



    return (
        <div className={d.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                     <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={d.posts}>

                {/*<Post message = {postData[0].message}  likesCount = {postData[0].likesCount}/>*/}
                {/*<Post message = {postData[1].message} likesCount = {postData[1].likesCount}/>*/}
                {/*<Post message = {postData[2].message} likesCount = {postData[2].likesCount}/>*/}

                {postsElements}

            </div>
        </div>
    )
}



export default MyPosts;







