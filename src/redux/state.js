import {rerenderEntireTree} from "../render";

let state = {

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

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        // message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


export default state;



