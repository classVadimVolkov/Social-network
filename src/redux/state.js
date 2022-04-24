import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "How are you?", likesCounter: 13},
            {id: 2, message: "It's my first message", likesCounter: 23}
        ],
        newPostText: "new post"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo!"}
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounter: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export let updateNewPostText = (postMessage) => {
    state.profilePage.newPostText = postMessage
    rerenderEntireTree(state)
}

export default state