import React from 'react'
import style from "../Dialogs/Dialogs.module.scss"
import DialogItem from './DialogItem/DialogItem'
import Message from './MessageItem/MessageItem'
import { MessagesPageType } from '../../redux/state'

const Dialogs = (props: MessagesPageType) => {

    let dialogsElements = props.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} />
        )
    })

    let messagesElements = props.messagesData.map(el => {
        return (
            <Message message={el.message} id={el.id} />
        )
    })

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