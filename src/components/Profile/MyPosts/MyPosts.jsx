import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "How are you?", likesCounter: 13},
        {id: 2, message: "It's my first message", likesCounter: 23}
    ]

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
                <Post message={postData[0].message} likesCounter={postData[0].likesCounter}/>
                <Post message={postData[1].message} likesCounter={postData[1].likesCounter}/>
            </div>
        </div>
    )
}

export default MyPosts