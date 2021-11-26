const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'What is your name?', likesCount: 23},
        {id: 3, message: 'Tell me about yourself?', likesCount: 9}
    ],
    newPostText: "Belik is React master"
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

           return  {
                ...state,
                posts: [...state.posts,newPost],
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

            return  {
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

        default:
            return state;
    }


    // return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;