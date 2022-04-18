import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let highlight = ({isActive}) => isActive ? style.active : style.item;

    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" className={highlight}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={highlight}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" className={highlight}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" className={highlight}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" className={highlight}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar