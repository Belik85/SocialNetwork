import React from 'react';
import d from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={d.content}>

            <div>
                <img src="https://kontra.agency/wp-content/uploads/2019/02/How_to_create_high_quality_images_for_social_media.png"/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                <MyPosts />

            </div>
        </div>
    )
}

export default Profile;