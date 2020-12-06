import React from 'react';
import d from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={d.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;