import React from "react";
import style from "./Navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <Link to="/dialogs">Messages</Link>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar