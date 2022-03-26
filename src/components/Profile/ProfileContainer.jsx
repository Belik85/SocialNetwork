import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        //
        // usersAPI.getProfile(userId).then(response => {
        //             this.props.setUserProfile(response.data);
        //             });



        this.props.getUserProfile(userId);

        // usersAPI.getProfile(userId).then(response => {
        //         this.props.setUserProfile(response.data);
        //         });
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //
        //     this.props.setUserProfile(response.data);
        // });
    }

    render() {
        // if (!this.props.isAuth === false) return <Redirect to={'/login'}/>;
        // if (this.props.isAuth === false) return <Redirect to={'/login'}/>;
        // if (this.props.isAuth == false) return <Redirect to='/login'/>;
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect,

) (ProfileContainer);

// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth === false) return <Redirect to={'/login'}/>;
//     return <ProfileContainer {...props}/>
// }




// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// });
//
// AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)





// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
//     isAuth: state.auth.isAuth
// });   // если функция возвращает обьект то мы помещаем его в круглые скобки

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
// export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);

// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);