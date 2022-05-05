import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

let idDialogCounter = 1;

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
                {id: idDialogCounter++, name: "Dimych"},
                {id: idDialogCounter++, name: "Andrew"},
                {id: idDialogCounter++, name: "Sveta"},
                {id: idDialogCounter++, name: "Sasha"},
                {id: idDialogCounter++, name: "Viktor"},
                {id: idDialogCounter++, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Yo!"}
            ],
            newMessageText: ""
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

window.store = store

export default store