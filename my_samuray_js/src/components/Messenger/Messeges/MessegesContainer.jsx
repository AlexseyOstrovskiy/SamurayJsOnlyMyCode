import { connect } from "react-redux";
import Messeges from "./Messeges";

let mapStateToProps=(state)=>{
    return{
        messages:state.messenger.allMessages        
    }
    
};
let mapDispatchToProps=()=>{};
const MessegesContainer = connect(mapStateToProps,mapDispatchToProps )(Messeges);
export default MessegesContainer;