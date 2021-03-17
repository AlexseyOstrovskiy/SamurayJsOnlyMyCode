import React from 'react';
import s from '../Messeges/Messeges.module.css';
import MessegesUnit from '../Messeges/MessegesUnit/MessegesUnit';


const Messeges = (props) => {
    console.log(props.messages)
    let messegesElement = props.messages.map((p) => <MessegesUnit mesage={p.mesage} />);
    return (

        <div className={s.messeges}>
            {messegesElement}

        </div>
    )
}
export default Messeges;