import React from 'react'
import style from "./ProfileInfo.module.scss"
import Silvana from '../../../images/Silvana.jpg';
const PropfileInfo = () => {
    return (
        <div>
            <div>
                <div className={style.profilePhoto}>
                    <img src={Silvana} alt="post" />
                </div>
                <div>ava + description</div>
            </div>
        </div>
    )
}

export default PropfileInfo