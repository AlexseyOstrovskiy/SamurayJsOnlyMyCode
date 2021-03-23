const OPEN_MESSAGES_THIS_CONTACT = 'OPEN-MESSAGES-THIS-CONTACT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE_CURRENT_CONTACT = 'SEND-NEW-MESSAGE-CURRENT-CONTACT';
let initialState = {
    contacts: [
        { id: 1, name: 'Tonny' },
        { id: 2, name: 'Vinny' },
        { id: 3, name: 'Cardy' },
    ],
    allMessages: [
        {
            id: 1, messages: [{ idMess: 1, mesage: 'Hi man' },
            { idMess: 2, mesage: 'myMess#2' },
            ]
        },
        {
            id: 2, messages: [{ idMess: 1, mesage: 'I want to beer' },
            { idMess: 2, mesage: 'seriosly, man, i want to beer!' },
            { idMess: 2, mesage: 'seriosly, beer!' },
            { idMess: 2, mesage: 'seriosly, beer2!' },
            ]
        },
        {
            id: 3, messages: [{ idMess: 1, mesage: 'Pizza' },
            { idMess: 2, mesage: 'PIZZA with pineApple' },
            ]
        },

    ],
    allMessagesCurrentContact: [],
    newTextMessage: 'new Text from messenger-reducer',
    cleanAllMessagesCurrentContact: [],
    idCurrentContact:0
}


const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MESSAGES_THIS_CONTACT:
            let deletElements = state.allMessagesCurrentContact.length
            state.allMessagesCurrentContact.splice(0, deletElements)
            let idInReducer = action.id - 1;
            let i = 0;
            let x = state.allMessages[idInReducer].messages.length;
            let messageCurrentContact;
            for (i; i < x; i++) {
                messageCurrentContact = {
                    idMess: 1111111111,
                    mesage: state.allMessages[idInReducer].messages[i].mesage
                };
                state.allMessagesCurrentContact.push(messageCurrentContact);

            }
            return {
                ...state,
                allMessagesCurrentContact: [...state.allMessagesCurrentContact],
                idCurrentContact: action.id
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
                newTextMessage:action.textNewMessage

            };
        case SEND_NEW_MESSAGE_CURRENT_CONTACT:
            let newMessage = {
                idMess:88888888,
                mesage:state.newTextMessage
            };
            state.allMessages[state.idCurrentContact -1].messages.push(newMessage)
            return{
                ...state,
                allMessagesCurrentContact:[...state.allMessagesCurrentContact, newMessage],
                newTextMessage:' '
            }
        default:
            return state;
    }
}

export const openMessagesThisContactAC = (id) => ({ type: OPEN_MESSAGES_THIS_CONTACT, id: id });
export const updateNewMessageTextAC = (textNewMessage)=>({type:UPDATE_NEW_MESSAGE_TEXT,textNewMessage:textNewMessage});
export const sendNewMessageCurrentContactAC = () =>({type:SEND_NEW_MESSAGE_CURRENT_CONTACT});
export default messengerReducer;