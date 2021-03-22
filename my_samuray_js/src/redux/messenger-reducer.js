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
                         {idMess:2, mesage:'seriosly, beer2!'},  
                      ]},
        {id:3, messages:[{idMess:1, mesage:'Pizza'},
                      {idMess:2, mesage:'PIZZA with pineApple'},  
                    ]},

    ],
    allMessagesCurrentContact : [ ],
    newTextMessage: 'new Text from messenger-reducer'
}
const messengerReducer = (state=initialState, action) => {
    switch(action.type){
        case OPEN_MESSAGES_THIS_CONTACT:
       let i = 0;
       let x = state.allMessages[1].messages.length;
       let messageCurrentContactArray= [];
    let messageCurrentContact;
        for(i; i<x; i++){
                 messageCurrentContact = {
                idMess:1111111111,
                mesage:state.allMessages[1].messages[i].mesage
                };
                messageCurrentContactArray.push(messageCurrentContact)
                console.log('test' + messageCurrentContactArray[i].mesage);
             
            }
                    // let messageCurrentContact0 = {
                    // idMess:1111111111,
                    // mesage:state.allMessages[1].messages[0].mesage
                    // };
        
                    // let messageCurrentContact1 = {
                    //     idMess:1111111111,
                    //     mesage:state.allMessages[1].messages[1].mesage
                    //     };
                        
                    // let messageCurrentContact2 = {
                    //         idMess:1111111111,
                    //         mesage:state.allMessages[1].messages[2].mesage
                    //         };
                return{
                ...state,
                allMessagesCurrentContact:[...state.allMessagesCurrentContact, messageCurrentContactArray]
                // allMessagesCurrentContact:[...state.allMessagesCurrentContact, messageCurrentContactArray[0] ],
               
            }
           
        
        
        default:
            return state;
    }
}

export const openMessagesThisContactAC =(id) =>({type:OPEN_MESSAGES_THIS_CONTACT, id:id});

export default messengerReducer;