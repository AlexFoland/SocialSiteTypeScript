import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.scss"
const Navbar = () => {
    return (
        <div className={style.navigationPanel}>
            <div>
                <NavLink to="/profile" activeClassName={style.active}><h1>Profile</h1></NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={style.active}><h1>Messages</h1></NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={style.active}><h1>News</h1></NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={style.active}><h1>Music</h1></NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={style.active}><h1>Settings</h1></NavLink>
            </div>
        </div>
    )
}
export default Navbar;