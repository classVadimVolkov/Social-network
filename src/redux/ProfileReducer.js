const ADD_POST = 'addPost';
const UPDATE_NEW_POST_TEXT = 'updateNewPostText';
let idPostCounter = 1;

let initialState = {
    posts: [
        {id: idPostCounter++, message: 'How are you?', likesCounter: 13},
        {id: idPostCounter++, message: "It's my first message", likesCounter: 23}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: idPostCounter++,
            message: state.newPostText,
            likesCounter: 0
        }
        return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost],
        }
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostText: action.text
        }
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer