const OPEN_MESSAGES_THIS_CONTACT = 'OPEN-MESSAGES-THIS-CONTACT';

let initialState = {
    contacts:[
        {id:1, name:'Tonny'},
        {id:2, name:'Vinny'},
        {id:3, name:'Cardy'},
    ],
    allMessages:[
        {id:1, messages:[{idMess:1, mesage:'Hi man'},
                          {idMess:2, mesage:'myMess#2'},  
                        ]},
        {id:2, messages:[{idMess:1, mesage:'I want to beer'},
                        {idMess:2, mesage:'seriosly, man, i want to beer!'},
                        {idMess:2, mesage:'seriosly, beer!'},
                         {idMess:2, mesage:'seriosly, beer!'},  
                      ]},
        {id:3, messages:[{idMess:1, mesage:'Pizza'},
                      {idMess:2, mesage:'PIZZA with pineApple'},  
                    ]},

    ],
    allMessagesCurrentContact : [  {idMess: 777, mesage:''},
                                   {idMess: 888, mesage:''},
                                   {idMess: 999, mesage:''}
                                                ],
    newTextMessage: 'new Text from messenger-reducer'
}
const messengerReducer = (state=initialState, action) => {
    switch(action.type){
        case OPEN_MESSAGES_THIS_CONTACT:
       let i = 0;
       let x = state.allMessages[1].messages.length;
       let messageCurrentContactArray= [];
    let messageCurrentContact;
        while( i<x ){
                 messageCurrentContact = {
                idMess:1111111111,
                mesage:state.allMessages[1].messages[i].mesage
                };
                messageCurrentContactArray.push(messageCurrentContact)
                console.log('test' + messageCurrentContactArray.length);
                i++;
        }
            return{
                ...state,
                allMessagesCurrentContact:[...state.allMessagesCurrentContact, messageCurrentContact ]
            }
        
        default:
            return state;
    }
}

export const openMessagesThisContactAC =(id) =>({type:OPEN_MESSAGES_THIS_CONTACT, id:id});

export default messengerReducer;