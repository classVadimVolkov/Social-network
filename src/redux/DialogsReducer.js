const ADD_MESSAGE = "addMessage";
const UPDATE_NEW_MESSAGE_TEXT = "updateNewMessageText";
let idMessageCounter = 4;

export const dialogsReducer = (state, action) => {
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