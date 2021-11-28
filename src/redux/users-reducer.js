const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

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
            let stateCopy = {
                ...state,
                users: [...state.users],
                users: state.users.map(u =>{
                    if(u.id === action.userId)
                    return {...u, followed: true}
                })
            }
        case UNFOLLOW:
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export default usersReducer;