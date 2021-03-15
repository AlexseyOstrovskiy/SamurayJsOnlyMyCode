import React from 'react';
import s from '../Messeges/Messeges.module.css';
import MessegesUnit from '../Messeges/MessegesUnit/MessegesUnit';


const Messeges =(props)=>{
    console.log(props)
   
    let messegesElement = props.messages[0].messages.map((p)=> <MessegesUnit mesage={p.mesage}/> )
    
    return (

        <div className={s.messeges}>
            {messegesElement}
           
        </div>
    )
}
export default Messeges;