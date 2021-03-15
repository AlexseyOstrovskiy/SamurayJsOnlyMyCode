import React from 'react';
import s from '../Messenger/Messenger.module.css';
import ContactContainer from './Contact/ContactContainer';


const Messenger =(props)=>{
    return (

        <div className={s.Messenger}>
            <ContactContainer />
        </div>
    )
}
export default Messenger;