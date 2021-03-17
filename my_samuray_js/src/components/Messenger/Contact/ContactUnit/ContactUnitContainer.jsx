import { connect } from "react-redux";
import ContactUnit from "./ContactUnit";
import {openMessagesThisContactAC} from '../../../../redux/messenger-reducer';
let mapStateToProps = (state) =>{
    return {   b : state.messenger.newTextMessage}
};

let mapDispatchToProps = (dispatch) =>{
return{
    openMessagesThisContact:(id) =>{
        dispatch(openMessagesThisContactAC(id));
      
    }
}
};

const ContactUnitContainer = connect(mapStateToProps, mapDispatchToProps)(ContactUnit);
export default ContactUnitContainer;