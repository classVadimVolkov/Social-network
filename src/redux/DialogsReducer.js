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
    let stateCopy = {...state}

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: idMessageCounter++,
            message: state.newMessageText
        }
        stateCopy.messages = [...state.messages]
        stateCopy.messages.push(newMessage)
        stateCopy.newMessageText = ""
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        stateCopy.newMessageText = action.text
    }

    return stateCopy
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: body
})

export default dialogsReducer