import style from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={style.dialogs}>{props.message}</div>
    )
}

export default Message