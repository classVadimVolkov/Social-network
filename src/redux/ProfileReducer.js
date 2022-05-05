const ADD_POST = "addPost";
const UPDATE_NEW_POST_TEXT = "updateNewPostText";
let idPostCounter = 3;

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: idPostCounter++,
            message: state.newPostText,
            likesCounter: 0
        }
        state.posts.push(newPost)
        state.newPostText = ""
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer