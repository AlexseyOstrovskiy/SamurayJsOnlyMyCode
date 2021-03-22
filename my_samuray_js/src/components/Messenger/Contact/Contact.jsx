import React from 'react';
import s from '../Contact/Contact.module.css';
import ContactUnit from './ContactUnit/ContactUnit';
import ContactUnitContainer from '../Contact/ContactUnit/ContactUnitContainer';


const Contact =(props)=>{
   let contactElements = props.contacts.map((p) => <ContactUnitContainer name={p.name} id={p.id}/>)
   let test = () =>{
    //   return alert('hi')
   }
   return (
        <div className={s.сontact} onClick={test} >
          
            {contactElements }
            
        </div>
    )
}
export default Contact;