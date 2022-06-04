import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'What is your name?', likesCount: 23},
        {id: 3, message: 'Tell me about yourself?', likesCount: 9}
    ],
    newPostText: "Belik is React master",
    profile: null,
    status: ""
};




const profileReducer = (state = initialState, action) => {

    // if (action.type === "ADD-POST") {
    // this._addPost();
    // let newPost = {
    //     id: 5,
    //     message: state.newPostText,
    // message: postMessage,
    //     likesCount: 0
    // };
    // state.posts.push(newPost)
    // state.newPostText = '';
    // this._callSubscriber(this._state);
    // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    // this._updateNewPostText(action.newText)
    // state.newPostText = action.newText;
    // this._callSubscriber(this._state);
    // }

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };

            // let stateCopy = {
            //     ...state,
            //     posts: [...state.posts,newPost],
            //     newPostText: ""
            // };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
        }

        // state.posts.push(newPost)
        // state.newPostText = '';
        // return state;

        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };

            // let stateCopy = {
            //     ...state,
            //     newPostText: action.newText
            // };

            // stateCopy.posts = [...state.posts];
            // stateCopy.newPostText = action.newText;
            // return stateCopy;


            // state.newPostText = action.newText;
            // return state;

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }


    // return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}



export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}


export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setStatus = (status) => ({type: SET_STATUS, status})

export default profileReducer;


