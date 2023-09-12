import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./DialogItem.module.scss"
import { DialogType } from '../../../redux/state';


const DialogItem = (props: DialogType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div >
    )

}

export default DialogItem