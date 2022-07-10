import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
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

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => dispatch(setUserProfile(data)))
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => dispatch(setUserStatus(data)))
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export default profileReducer