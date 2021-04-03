// import React from 'react';
// import s from '../Users/Users.module.css';
// import userNoPhoto from '../../assets/img/userNoFoto.png';
// import  * as axios from 'axios';

// const Users =(props)=>{
// let getUsers =()=>{
//     if(props.users.length===0){
//     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
        
//     response =>{
//         props.setUsers(response.data.items)}) 
// }}

   
    
//     return <div>
//         <div>
//         <button onClick={getUsers}>Get Users</button>
//         </div>
//       { props.users.map(u=>
        
//        <div key={u.id} className={s.users}>
           
//            <div>              
//                    <img src={u.photos.small != null ? u.photos.small :userNoPhoto } className={s.userNoPhotoStyle}></img>
//                    <div className={s.aboutUserStyle}>
//                     <div>{u.name}</div>
//                     <div>{"u.location.city +', ' + u.location.country"}</div>
//                     <br/>
//                     <div>{u.status}</div>
//                     <div>
//                         { u.followed  
//                         ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
//                         :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
//                     </div>   
//                     </div>
                       
//            </div>
           
//         </div>
//        )}
//     </div>
    
// }
// export default Users;