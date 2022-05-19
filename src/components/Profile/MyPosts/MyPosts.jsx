import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCounter={p.likesCounter}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts