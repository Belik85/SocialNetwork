import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

            this.props.setUserProfile(response.data);
        });

    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = () => ({
    a:13
});   // если функция возвращает обьект то мы помещаем его в круглые скобки


export default connect(mapStateToProps) (ProfileContainer);