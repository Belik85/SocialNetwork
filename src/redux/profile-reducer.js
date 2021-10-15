const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const profileReducer = (state, action) => {

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
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


    // return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;