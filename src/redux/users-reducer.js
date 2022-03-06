import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    // newMessageBody: "",
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            // let stateCopy =
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {
                ...state,
                // users: action.users
                // users: [...state.users, ...action.users]
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                // users: action.users
                currentPage: action.currentPage

            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count

            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching

            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter(id => id != action.userId)
                // action.isFetching
            }
        }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => {
    // export const getUsersThunkCreator  = (currentPage, pageSize) => {
    return (dispatch ) => {
    dispatch(toggleIsFetching(true));
    // this.props.toggleIsFetching(true);

        usersAPI.getUsers(currentPage,pageSize).then(data => {
            // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        // this.props.toggleIsFetching(false);
        dispatch(setUsers(data.items));
        // this.props.setUsers(data.items);
        dispatch(setTotalUsersCount(data.totalCount));
        // this.props.setTotalUsersCount(data.totalCount);
    });

}
}
export default usersReducer;