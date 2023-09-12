import React from 'react'
import style from "../Header/Header.module.scss"
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerContainerLogo}>
                <div className={style.containerLogo}>
                    <h1 className={style.logo}>Game<u className={style.lineU}>Eternity</u></h1>
                </div>
                <Navbar />
            </div>
        </div>
    )
}
export default Header;