import React from 'react';
import s from '../Messeges/Messeges.module.css';
import MessegesUnit from '../Messeges/MessegesUnit/MessegesUnit';


const Messeges = (props) => {
    console.log(props.messages)
    let messegesElement = props.messages.map((p) => <MessegesUnit mesage={p.mesage} />);
    let newMessageText = React.createRef();
    let onMessageChange=()=>{
        let textNewMessage = newMessageText.current.value;
        props.updateNewMessageText(textNewMessage);
    };
    let onSendMessage=()=>{
        props.sendNewMessageCurrentContact()
    };
    return (
        <div className={s.messeges}>
            {messegesElement}
            <div>
                <div>Write new message:</div>
                    <textarea ref={newMessageText} onChange={onMessageChange} value={props.newTextFromMessage}
                    rows="3" cols="70" wrap="hard" > </textarea>
                    <br/>
                    <button onClick={onSendMessage}>Send message</button>        
            </div>
        </div>
    )
}
export default Messeges;