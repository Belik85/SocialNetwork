import React from 'react';
import d from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileStatus = (props) => {


    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
            <div>
                <span>{props.status}</span>
            </div>
        </div>
    )
}

export default ProfileStatus;