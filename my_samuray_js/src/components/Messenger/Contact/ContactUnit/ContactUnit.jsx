import React from 'react';
import s from '../ContactUnit/ContactUnit.module.css';
import message2 from '../../../../assets/img/message2.png';

const ContactUnit =(props)=>{
   
    return (

        <div className={s.contactUnit}>
            
           <div className={s.contactStyle}>
            {props.name}
            <img src={message2} className={s.messagePicture}/>
            </div>
        </div>
    )
}
export default ContactUnit;