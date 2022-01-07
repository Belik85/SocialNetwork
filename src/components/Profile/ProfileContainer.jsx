import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


class ProfileContainer extends React.Component {
    render() {
        return (
            <div className={d.content}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        )
    }
}


export default ProfileContainer;