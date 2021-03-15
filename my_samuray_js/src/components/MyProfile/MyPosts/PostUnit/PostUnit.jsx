import React from 'react';
import s from './PostUnit.module.css';
import avatarPost from '../../../../assets/img/usersAvatar.jpg';

const PostUnit =(props)=>{
    let onDeletePost =()=>{
        let id = props.id;
        props.deleteThisPost(id);
    }

    return (
        <div className={s.postStyle} >
           <img src={avatarPost} className={s.avatarPost}/>
           <br></br>
           {props.textPost}
           <br></br>
            <button onClick={onDeletePost} className={s.deleteBtnStyle}>Delete this post</button>
        </div>
    )
}
export default PostUnit;