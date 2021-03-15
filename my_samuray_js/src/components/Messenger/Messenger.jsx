import React from 'react';
import s from '../Messenger/Messenger.module.css';
import ContactContainer from './Contact/ContactContainer';
import MessegesContainer from './Messeges/MessegesContainer'

const Messenger =(props)=>{
    return (

        <div className={s.Messenger}>
            <div>
            <ContactContainer />
            </div>
            <div className={s.messagesContainerStyle}>
            <MessegesContainer/>
            </div>
        </div>
    )
}
export default Messenger;