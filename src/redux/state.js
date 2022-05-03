let idMessageCounter = 1;
let idPostCounter = 1;
let idDialogCounter = 1;

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log("State is changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === "addPost") {
            let newPost = {
                id: idPostCounter++,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        }
        if (action.type === "updateNewPostText") {
            debugger
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }
        if (action.type === "addMessage") {
            let newMessage = {
                id: idMessageCounter++,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber(this._state)
        }
        if (action.type === "updateNewMessageText") {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this._state)
        }
    }
}

window.store = store

export default store