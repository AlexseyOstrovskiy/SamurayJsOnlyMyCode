import React from 'react';
import s from '../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation =(props)=>{
    return (
        <div className={s.navigation}>
           <div className={s.rows}>
               <NavLink to ='/myProfile' activeClassName={s.active}> My profile </NavLink>
           </div>
           <div className={s.rows}>
               <NavLink to ='/users' activeClassName={s.active}> Users </NavLink>
           </div>
           <div className={s.rows}>
               <NavLink to ='/messenger' activeClassName={s.active}> Messenger </NavLink>
           </div>
        
        </div>
    )
}
export default Navigation;