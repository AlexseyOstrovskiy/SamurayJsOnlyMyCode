import React from 'react';
import s from '../MessegesUnit/MessegesUnit.module.css';


const MessegesUnit =(props)=>{
   console.log('from to messegesUnit' + props)
    return (
        <div className={s.messegesUnit}>
           <div className={s.messegesStyle}>
            {props.mesage}
            </div>
        </div>
    )
}
export default MessegesUnit;