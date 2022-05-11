const ADD_MESSAGE = "addMessage";
const UPDATE_NEW_MESSAGE_TEXT = "updateNewMessageText";
let idMessageCounter = 1;
let idDialogCounter = 1;

let initialState = {
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
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: idMessageCounter++,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ""
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text
    }

    return state
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})

export default dialogsReducer