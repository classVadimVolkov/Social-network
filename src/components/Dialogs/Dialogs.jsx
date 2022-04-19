import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.dialogs}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ]

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo!"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs