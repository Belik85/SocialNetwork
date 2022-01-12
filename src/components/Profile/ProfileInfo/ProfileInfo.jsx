import React from 'react';
import d from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return  <Preloader/>
    }


    return (
        <div>
            <div>
                <img src="https://kontra.agency/wp-content/uploads/2019/02/How_to_create_high_quality_images_for_social_media.png"/>
            </div>
            <div className={d.descriptionBlock}>
                <img src = {props.profile.photos.large} />
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;