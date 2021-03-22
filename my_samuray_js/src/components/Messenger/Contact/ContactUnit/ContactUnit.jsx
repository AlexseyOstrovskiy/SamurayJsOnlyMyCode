import React from 'react';
import s from '../ContactUnit/ContactUnit.module.css';
import message2 from '../../../../assets/img/message2.png';

const ContactUnit =(props)=>{
    
    let openMessages = () =>{
       
        
        props.openMessagesThisContact(props.id);
       }
    return (

        <div className={s.contactUnit} onClick={openMessages}> 
           <div className={s.contactStyle} >
            {props.name}
            <img src={message2} className={s.messagePicture}/>
            </div>
        </div>
    )
}
export default ContactUnit;