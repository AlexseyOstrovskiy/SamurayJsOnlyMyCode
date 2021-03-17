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
                      ]},
        {id:3, messages:[{idMess:1, mesage:'Pizza'},
                      {idMess:2, mesage:'PIZZA with pineApple'},  
                    ]},

    ],
    allMessagesCurrentContact : [{id:'', currentMessages:  [{idMess: 777, mesage:'message777'},
                                                            {idMess: 888, mesage:'message888'},
                                                            {idMess: 999, mesage:'message999'}]
                                                }],
    newTextMessage: 'new Text from messenger-reducer'
}
const messengerReducer = (state=initialState, action) => {
    switch(action.type){
        case OPEN_MESSAGES_THIS_CONTACT:
            let newAllMessagesCurrentContact = {    
                id:action.id,
                 currentMessages:[{idMess:7777, message:state.allMessages[action.id].messages.mesage}]
        };
            return{
                ...state,
                allMessagesCurrentContact:[...newAllMessagesCurrentContact]
            }
        
        default:
            return state;
    }
}

export const openMessagesThisContactAC =(id) =>({type:OPEN_MESSAGES_THIS_CONTACT, id:id});

export default messengerReducer;