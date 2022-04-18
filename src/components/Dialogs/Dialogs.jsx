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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Andrey"/>
                <DialogItem id="3" name="Sveta"/>
                <DialogItem id="4" name="Sasha"/>
                <DialogItem id="5" name="Victor"/>
                <DialogItem id="6" name="Valera"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="Yo!"/>
            </div>
        </div>
    )
}

export default Dialogs