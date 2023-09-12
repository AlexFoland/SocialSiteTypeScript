import React from 'react'
import style from "./Post.module.scss"
import { PostType } from '../../../../redux/state'

export const Post = (props: PostType) => {
    return (
        <div className={style.post}>
            {props.message}
            <img src={props.imgUrl} alt="post" />
            <div>LIKE: {props.likesCount}</div>
        </div>
    )
}


