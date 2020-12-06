import React from 'react';
import d from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://kontra.agency/wp-content/uploads/2019/02/How_to_create_high_quality_images_for_social_media.png"/>
            </div>
            <div className={d.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;