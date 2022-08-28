const SEND_MESSAGE = '/DialogsReducer/SEND_MESSAGE';
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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: idMessageCounter++,
                message: action.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer