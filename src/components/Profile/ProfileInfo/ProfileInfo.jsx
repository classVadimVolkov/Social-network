import React from "react";
import style from "./ProfileInfo.module.css"
import emptyUserPhoto from "../../../asserts/images/userEmptyAvatar.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img
                    className={style.mainPhoto}
                    src={props.profile.photos.large ?? emptyUserPhoto}/>
                <div>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                <p/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo