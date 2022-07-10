import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCounter={p.likesCounter}/>)

    const addNewPostText = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPostText}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts