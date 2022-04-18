import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="How are you?" likesCounter="0"/>
                <Post message="It's my first message" likesCounter="23"/>
            </div>
        </div>
    )
}

export default MyPosts