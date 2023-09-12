import React from 'react'
import style from "./Profile.module.scss"
import { MyPosts } from './MyPosts/MyPosts'
import PropfileInfo from './ProfileInfo/PropfileInfo'
import { PostsDataType } from '../../redux/state'

const Profile = (props: PostsDataType) => {
    return (
        <div className={style.container}>

            <PropfileInfo />

            <MyPosts postsData={props.postsData} />

        </div>
    )
}

export default Profile;