import React from 'react';
import s from '../Users/Users.module.css';
import userNoPhoto from '../../assets/img/userNoFoto.png';

const Users =(props)=>{
//     if(props.users.length===0){
//     props.setUsers( 
//     {id:1,followed:false,userPhoto:userNoPhoto, fullName:'Alex', status:'I can all do!', location:{city:'Mogilev', country:'Belarus'}},
//     {id:2,followed:true,userPhoto:userNoPhoto, fullName:'Jhon', status:'I need a new job, man! ', location:{city:'Minsk', country:'Belarus'}},
//     {id:3,followed:false,userPhoto:userNoPhoto, fullName:'Will', status:'I very good programmer!', location:{city:'Vitebsk', country:'Belarus'}},
//     {id:4,followed:true,userPhoto:userNoPhoto, fullName:'Joshua', status:'I love beer man!', location:{city:'Kiev', country:'Ukrain'}}
//     )
// }

    return (

       props.users.map(u=>
       <div key={u.id} className={s.users}>
           <div>              
                   <img src={u.userPhoto} className={s.userNoPhotoStyle}></img>
                   <div className={s.aboutUserStyle}>
                    <div>{u.fullName}</div>
                    <div>{u.location.city +', ' + u.location.country}</div>
                    <br/>
                    <div>{u.status}</div>
                    <div>
                        {u.followed  
                        ?<button onClick={()=>{props.follow(u.id)}}>Unfollow</button>
                        :<button onClick={()=>{props.unfollow(u.id)}}>Follow</button>}
                       
                    </div>   
                    </div>
                       
           </div>
           
        </div>
       )
    )
}
export default Users;