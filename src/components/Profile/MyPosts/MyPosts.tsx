import React from 'react'
import { Post } from './Post/Post'
import style from "./MyPosts.module.scss"
import { PostsDataType } from '../../../redux/state'

export const MyPosts = (props: PostsDataType) => {

    let postsElements = props.postsData.map(el => {
        return (
            <Post message={el.message} id={el.id} imgUrl={el.imgUrl} likesCount={el.likesCount} />
        )
    })

    return (
        <div className={style.container}>
            <h2>My Posts:</h2>
            <div className={style.addPost}>
                <textarea name="" id=""></textarea>
                <button>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}
