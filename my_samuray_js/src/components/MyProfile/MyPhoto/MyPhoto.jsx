import React from 'react';
import s from '../MyPhoto/MyPhoto.module.css';
import usersAvatar from '../../../assets/img/usersAvatar.jpg';

const MyPhoto =(props)=>{
    return (

        <div className={s.MyPhoto}>
           <img src={usersAvatar} className={s.usersAvatar}/>
        </div>
    )
}
export default MyPhoto;