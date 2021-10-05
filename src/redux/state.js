const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";




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
        }
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
        if (action.type === "ADD-POST") {
            // this._addPost();
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                // message: postMessage,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            // this._updateNewPostText(action.newText)
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }


    }


}

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }

export const addPostActionCreator = () => ({type: ADD_POST})


// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT, newText: text
//     }
// }

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT , newText: text })



window.store = store;


export default store;



