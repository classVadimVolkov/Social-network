const ADD_POST = "addPost";
const UPDATE_NEW_POST_TEXT = "updateNewPostText";
let idPostCounter = 1;

let initialState = {
    posts: [
        {id: idPostCounter++, message: "How are you?", likesCounter: 13},
        {id: idPostCounter++, message: "It's my first message", likesCounter: 23}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state}

    if (action.type === ADD_POST) {
        let newPost = {
            id: idPostCounter++,
            message: state.newPostText,
            likesCounter: 0
        }
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ""
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        stateCopy.newPostText = action.text
    }

    return stateCopy
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer