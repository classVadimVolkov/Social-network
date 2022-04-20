import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)

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
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts