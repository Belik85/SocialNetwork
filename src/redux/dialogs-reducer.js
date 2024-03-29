const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy;
    // let stateCopy = {
    //     ...state,
    //     messages: [...state.messages]
    // };
    // stateCopy.messages = [...state.messages];

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

            // stateCopy = {
            //     ...state,
            //     newMessageBody: action.body
            // }
            // stateCopy.newMessageBody = action.body;
            // return stateCopy;

        // state.newMessageBody = action.body;
        // return state;


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };

            // stateCopy = {
            //     ...state,
            //     newMessageBody: "",
            //     messages: [...state.messages, {id: 6, message: body}]
            // };

            // stateCopy.messages.push();
            // stateCopy.newMessageBody = "";
            // stateCopy.messages.push({id: 6, message: body});
            // return stateCopy;


        // state.newMessageBody = "";
        // state.messages.push({id: 6, message: body});
        // return state;


        default:
            return state;
    }


    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
        // this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 6, message: body});
        // this._callSubscriber(this._state);
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;