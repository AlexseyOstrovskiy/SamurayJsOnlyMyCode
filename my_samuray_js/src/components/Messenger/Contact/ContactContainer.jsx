import { connect } from "react-redux";
import Contact from "./Contact";
let mapStateToProps=(state)=>{
    return{
        contacts:state.messenger.contacts
    }
};
let mapDispatchToProps=()=>{};
const ContactContainer = connect(mapStateToProps,mapDispatchToProps )(Contact);
export default ContactContainer;