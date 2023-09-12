import React from 'react'
import style from "./MessageItem.module.scss"
import { MessageType } from '../../../redux/state';

const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Message;