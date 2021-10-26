import React from 'react';
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {




    let state = props.store.getState().dialogsPage;

    // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    // let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    // let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    // let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    // let newMessageBody = state.newMessageBody;

    // let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    // let d = {
    //     id: 1,
    //     name: 'Dimych'
    // };
    //
    // let v = {
    //     id: 2,
    //     name: 'Vitalii'
    // };
    //
    // let l = {
    //     id: 3,
    //     name: 'Lesha'
    // };
    //
    // let w = {
    //     id: 4,
    //     name: 'Witya'
    // };
    //
    // let k = {
    //     id: 5,
    //     name: 'Karolina'
    // };
    //
    // let y = {
    //     id: 6,
    //     name: 'Yana'
    // };


    return (

       <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage = {onSendMessageClick} dialogsPage = {state}/>

    )
}

export default DialogsContainer;



















