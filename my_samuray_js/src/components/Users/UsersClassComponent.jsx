import React from 'react';
import s from '../Users/Users.module.css';
import userNoPhoto from '../../assets/img/userNoFoto.png';
import  * as axios from 'axios';

class UsersClassComponent extends React.Component{
componentDidMount(){
   
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
                response =>{
                  
                    this.props.setUsers(response.data.items)})
}

         
    render(){
        let pagesCount =Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for(let i=1; i <= pagesCount; i++ ){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p=>{
               return <span className={p === this.props.currentPage && s.selectedPage}>{p}</span>    
                })}
            </div>
      { this.props.users.map(u=>
       <div key={u.id} className={s.users}>  
           <div>              
                   <img src={u.photos.small != null ? u.photos.small :userNoPhoto } className={s.userNoPhotoStyle}></img>
                   <div className={s.aboutUserStyle}>
                    <div>{u.name}</div>
                    <div>{"u.location.city +', ' + u.location.country"}</div>
                    <br/>
                    <div>{u.status}</div>
                    <div>
                        { u.followed  
                        ?<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                        :<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                    </div>   
                    </div>
           </div>
        </div>
       )}
    </div>
    }
}
export default UsersClassComponent;