import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
//
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'What is your name?', likesCount: 23},
                {id: 3, message: 'Tell me about yourself?', likesCount: 9}
            ],
            newPostText: "Belik is React master"

        },

        dialogsPage: {
            dialogs: [

                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Vitalii'},
                {id: 3, name: 'Lesha'},
                {id: 4, name: 'Witya'},
                {id: 5, name: 'Karolina'},
                {id: 6, name: 'Yana'},
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},

            ],
            newMessageBody: "",
        },
        sideber: {}
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;         // observer = это паттэрн

    },


    _callSubscriber() {
        console.log("State changed");
    },
    // _addPost(postMessage) {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         // message: postMessage,
    //         likesCount: 0
    //     };
    //
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) { // {type: "ADD-POST"}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }




// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT, newText: text
//     }
// }







window.store = store;


export default store;



