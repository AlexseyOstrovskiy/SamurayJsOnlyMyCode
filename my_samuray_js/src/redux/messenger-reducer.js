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
    newTextMessage: 'new Text from messenger-reducer'
}
const messengerReducer = (state=initialState, action) => {
    switch(action.type){
        // case CASE:{

        //     return{

        //     }
        // }
        default:
            return state;
    }
}

export default messengerReducer;