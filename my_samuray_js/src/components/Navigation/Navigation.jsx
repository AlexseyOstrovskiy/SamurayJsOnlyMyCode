import React from 'react';
import s from '../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation =(props)=>{
    return (
        <div className={s.navigation}>
           <div>
               <NavLink to ='/myProfile'> My profile </NavLink>
           </div>
           <div>
               <NavLink to ='/users'> Users </NavLink>
           </div>
           <div>
               <NavLink to ='/messenger'> Messenger </NavLink>
           </div>
        
        </div>
    )
}
export default Navigation;