import React from "react";
import style from "./Users.module.css";
import emptyUserPhoto from "../../asserts/images/userEmptyAvatar.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={style.item}>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null
                            ? u.photos.small
                            : emptyUserPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    )
}

export default Users