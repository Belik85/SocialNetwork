const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {

    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {id: 2, followed: true, fullName: 'Ivan', status: 'No problem', location: {city: 'Moscow', country: 'Russia'}},
        {
            id: 3,
            followed: false,
            fullName: 'Roma',
            status: 'You are a game',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Kamil',
            status: 'Send me a message',
            location: {city: 'Wroclaw', country: 'Poland'}
        },
        {
            id: 5,
            followed: false,
            fullName: 'Dorian',
            status: 'Music of the sun',
            location: {city: 'Bucharest', country: 'Romania'}
        }
    ],
    newMessageBody: "",
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            // let stateCopy =
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u =>{
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u =>{
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state,
                // users: action.users
                users: [...state.users, ...action.users]

            }
        }
        default: return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;