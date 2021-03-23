import { connect } from "react-redux";
import Messeges from "./Messeges";
import {updateNewMessageTextAC} from './../../../redux/messenger-reducer';
import {sendNewMessageCurrentContactAC} from './../../../redux/messenger-reducer';

let mapStateToProps=(state)=>{
    return{
        // version 1
        // messages:state.messenger.allMessages      
        messages: state.messenger.allMessagesCurrentContact,
        newTextFromMessage:state.messenger.newTextMessage  
    }
    
};
let mapDispatchToProps=(dispatch)=>{
    return{
        createMessagesElementInState: () =>{
           
        },
        updateNewMessageText:(textNewMessage)=>{
            dispatch(updateNewMessageTextAC(textNewMessage))
        },
        sendNewMessageCurrentContact:()=>{
            dispatch(sendNewMessageCurrentContactAC())
        }
    }
};
const MessegesContainer = connect(mapStateToProps,mapDispatchToProps )(Messeges);
export default MessegesContainer;