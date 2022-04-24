import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts