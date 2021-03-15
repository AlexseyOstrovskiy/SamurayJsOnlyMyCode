import React from 'react';
import s from '../Contact/Contact.module.css';
import ContactUnit from './ContactUnit/ContactUnit';

const Contact =(props)=>{
   let contactElements = props.contacts.map((p) => <ContactUnit name={p.name}/>)
    return (

        <div className={s.Messenger}>
            {contactElements}
        </div>
    )
}
export default Contact;