import { connect } from "react-redux";
import ContactUnit from "./ContactUnit";
import {openMessagesThisContactAC} from '../../../../redux/messenger-reducer';
let mapStateToProps = () =>{

};

let mapDispatchToProps = (dispatch) =>{
return{
    openMessagesThisContact:(id) =>{
        dispatch(openMessagesThisContactAC(id));
        debugger;
    }
}
};
const ContactUnitContainer = connect(mapStateToProps, mapDispatchToProps)(ContactUnit);
export default ContactUnitContainer;