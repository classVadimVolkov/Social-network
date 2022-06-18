const ADD_POST = 'addPost';
const UPDATE_NEW_POST_TEXT = 'updateNewPostText';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let idPostCounter = 1;

let initialState = {
    posts: [
        {id: idPostCounter++, message: 'How are you?', likesCounter: 13},
        {id: idPostCounter++, message: "It's my first message", likesCounter: 23}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer