import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = '/ProfileReducer/ADD_POST';
const DELETE_POST = '/ProfileReducer/DELETE_POST';
const SET_USER_PROFILE = '/ProfileReducer/SET_USER_PROFILE'
const SET_USER_STATUS = '/ProfileReducer/SET_USER_STATUS'
let idPostCounter = 1;

let initialState = {
    posts: [
        {id: idPostCounter++, message: 'How are you?', likesCounter: 13},
        {id: idPostCounter++, message: "It's my first message", likesCounter: 23}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: idPostCounter++,
                message: action.newPostText,
                likesCounter: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export default profileReducer