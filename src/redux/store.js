import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "How are you?", likesCounter: 13},
                {id: 2, message: "It's my first message", likesCounter: 23}
            ],
            newPostText: ""
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
            ],
            newMessageText: ""
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

window.store = store

export default store