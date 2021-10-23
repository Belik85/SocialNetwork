import React from 'react';
import d from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";





const  MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message = {p.message}  likesCount = {p.likesCount}/>)

    let newPostElement = React.createRef();


    let addPost = () => {
        // props.dispatch({type: "ADD-POST"});
        // props.dispatch(addPostActionCreator());
        // let text = newPostElement.current.value;
         props.addPost();
         // props.addPost(text);
         // props.updateNewPostText(""); зануление ушло в state
         // newPostElement.current.value = "";
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
        // let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action);
    }

    return (
        <div className={d.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = {onPostChange} ref = {newPostElement} value={props.newPostText}  />
                     {/*<textarea ref = {newPostElement} value="Belik is react developer"  />*/}
                     {/*<textarea ref = {newPostElement} defaultValue={"Belik is react developer"}  />*/}
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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







