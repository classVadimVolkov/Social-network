const ADD_MESSAGE = 'addMessage';
const UPDATE_NEW_MESSAGE_TEXT = 'updateNewMessageText';
let idMessageCounter = 1;
let idDialogCounter = 1;

let initialState = {
    dialogs: [
        {id: idDialogCounter++, name: 'Vadzim'},
        {id: idDialogCounter++, name: 'Andrew'},
        {id: idDialogCounter++, name: 'Sveta'},
        {id: idDialogCounter++, name: 'Sasha'},
        {id: idDialogCounter++, name: 'Viktor'},
        {id: idDialogCounter++, name: 'Valera'}
    ],
    messages: [
        {id: idMessageCounter++, message: 'Hi!'},
        {id: idMessageCounter++, message: 'How are you'},
        {id: idMessageCounter++, message: 'Yo!'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: idMessageCounter++,
            message: state.newMessageText
        }
        return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, newMessage]
        }
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        return {
            ...state,
            newMessageText: action.text
        }
    }

    return state
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: body
})

export default dialogsReducer