import React from 'react';
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


// const DialogsContainer = () => {
//
//     // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
//
//     // let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
//
//     // let messagesElements = state.messages.map(m => <Message message={m.message}/>)
//
//     // let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
//
//     // let newMessageBody = state.newMessageBody;
//
//     // let newMessageBody = props.state.newMessageBody;
//
//
//     // let d = {
//     //     id: 1,
//     //     name: 'Dimych'
//     // };
//     //
//     // let v = {
//     //     id: 2,
//     //     name: 'Vitalii'
//     // };
//     //
//     // let l = {
//     //     id: 3,
//     //     name: 'Lesha'
//     // };
//     //
//     // let w = {
//     //     id: 4,
//     //     name: 'Witya'
//     // };
//     //
//     // let k = {
//     //     id: 5,
//     //     name: 'Karolina'
//     // };
//     //
//     // let y = {
//     //     id: 6,
//     //     name: 'Yana'
//     // };
//
//
//     return <StoreContext.Consumer>
//         { store => {
//             // let state = props.store.getState().dialogsPage;
//             // let state = store.getState().dialogsPage;
//             // let onSendMessageClick = () => {
//             //     props.store.dispatch(sendMessageCreator())
//             // };
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             };
//             // let onNewMessageChange = (body) => {
//             //     props.store.dispatch(updateNewMessageBodyCreator(body));
//             // };
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             // dialogsPage={state}
//                             dialogsPage={store.getState().dialogsPage}
//             />
//         }
//     }
//     </StoreContext.Consumer>
//
// }

let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth === false) return <Redirect to={'/login'}/>;
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;



















