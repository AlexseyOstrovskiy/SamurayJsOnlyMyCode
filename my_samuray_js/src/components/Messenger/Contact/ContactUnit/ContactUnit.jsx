import React from 'react';
import s from '../ContactUnit/ContactUnit.module.css';


const ContactUnit =(props)=>{
   
    return (

        <div className={s.contactUnit}>
           <div className={s.contactStyle}>
            {props.name}
            </div>
        </div>
    )
}
export default ContactUnit;