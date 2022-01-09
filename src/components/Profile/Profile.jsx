import React from 'react';
import d from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={d.content}>
            <ProfileInfo profile = {props.profile}/>
            {/*<MyPosts posts={props.profilePage.posts}*/}

            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}

            {/*// updateNewPostText = {props.updateNewPostText}*/}
            {/*// addPost={props.addPost}*/}

            {/*/>*/}

            <MyPostsContainer
                // store={props.store}

            />
        </div>
    )
}

export default Profile;