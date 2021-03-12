import React from 'react';
import s from '../Header/Header.module.css';
import logoForHeader from '../../assets/img/logoForHeader.jpg';

const Header =(props)=>{
    return (

        <div className={s.header}>
            <img src={logoForHeader} className={s.logoStyle}/>
        </div>
    )
}
export default Header;