import { connect } from "react-redux";
import Messeges from "./Messeges";

let mapStateToProps=(state)=>{
    return{
        // version 1
        // messages:state.messenger.allMessages      
        messages: state.messenger.allMessagesCurrentContact[0]  
    }
    
};
let mapDispatchToProps=()=>{
    return{
        createMessagesElementInState: () =>{
           
        }
    }
};
const MessegesContainer = connect(mapStateToProps,mapDispatchToProps )(Messeges);
export default MessegesContainer;