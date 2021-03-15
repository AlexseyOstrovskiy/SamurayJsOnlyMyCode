import React from 'react';
import s from '../ContactUnit/ContactUnit.module.css';


const ContactUnit =(props)=>{
   
    return (

        <div className={s.ContactUnit}>
            {props.name}
        </div>
    )
}
export default ContactUnit;