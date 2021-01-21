import React from 'react';
import d from './../Dialogs.module.css'


const Message = (props) => {

    // let set = React.createRef();
    //
    // let mess = () => {
    //     let texts = set.current.value;
    //     alert('bob')
    // }

    return <div className={d.dialogs}>{props.message}
        {/*<div>*/}
        {/*    <textarea ref={set}></textarea>*/}
        {/*    <button onClick={mess}>Добавить</button>*/}
        {/*</div>*/}
    </div>
}

export default Message;



















