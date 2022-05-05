import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogsReducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} value={props.state.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs