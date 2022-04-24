import {rerenderEntireTree} from "../render";

let idMessageCounter = 1;
let idPostCounter = 1;
let idDialogCounter = 1;

let state = {
    profilePage: {
        posts: [
            {id: idPostCounter++, message: "How are you?", likesCounter: 13},
            {id: idPostCounter++, message: "It's my first message", likesCounter: 23}
        ],
        newPostText: "new post"
    },
    dialogsPage: {
        dialogs: [
            {id: idDialogCounter++, name: "Dimych"},
            {id: idDialogCounter++, name: "Andrew"},
            {id: idDialogCounter++, name: "Sveta"},
            {id: idDialogCounter++, name: "Sasha"},
            {id: idDialogCounter++, name: "Viktor"},
            {id: idDialogCounter++, name: "Valera"}
        ],
        messages: [
            {id: idMessageCounter++, message: "Hi!"},
            {id: idMessageCounter++, message: "How are you"},
            {id: idMessageCounter++, message: "Yo!"}
        ],
        newMessageText: "new message"
    }
}

window.state = state

export let addPost = () => {
    let newPost = {
        id: idPostCounter++,
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

export let addMessage = () => {
    let newMessage = {
        id: idMessageCounter++,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state)
}

export let updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text
    rerenderEntireTree(state)
}

export default state