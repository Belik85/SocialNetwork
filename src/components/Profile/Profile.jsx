import React from 'react';
import d from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={d.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}

                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}

                // updateNewPostText = {props.updateNewPostText}
                // addPost={props.addPost}

            />
        </div>
    )
}

export default Profile;