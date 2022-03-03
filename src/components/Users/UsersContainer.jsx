import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator();
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }





    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        //         withCredentials: true,
        //     })

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    // getUsers = () => {
    //     if(this.props.users.length === 0) {
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
    //     [{
    //     id: 1,
    //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
    //     followed: false,
    //     fullName: 'Dmitry',
    //     status: 'I am a boss',
    //     location: {city: 'Minsk', country: 'Belarus'}
    // },
    //     {id: 2, followed: true, fullName: 'Ivan', status: 'No problem', location: {city: 'Moscow', country: 'Russia'}},
    //     {
    //         id: 3,
    //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
    //         followed: false,
    //         fullName: 'Roma',
    //         status: 'You are a game',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //         id: 4,
    //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14mXbg8nV2aaoAMs3BxYS3EoOK8wR6O8yZg&usqp=CAU",
    //         followed: true,
    //         fullName: 'Kamil',
    //         status: 'Send me a message',
    //         location: {city: 'Wroclaw', country: 'Poland'}
    //     },
    //     {
    //         id: 5,
    //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
    //         followed: false,
    //         fullName: 'Dorian',
    //         status: 'Music of the sun',
    //         location: {city: 'Bucharest', country: 'Romania'}
    //     }]
    //         })
    //     }
    // }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                // <img src = {loader}/>
                : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// export default connect(mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setUsers: setUsers,
//     setCurrentPage: setCurrentPage,
//     setTotalUsersCount: setTotalUsersCount,
//     toggleIsFetching: toggleIsFetching,
// })(UsersContainer);

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator
})(UsersContainer);