import React from 'react';
import s from './PostUnit.module.css';


const PostUnit =(props)=>{
//    let lastId = props.postLength;
//     console.log(lastId);

    let onDeletePost =()=>{
        let id = props.id;
        props.deleteThisPost(id);
    }

    return (
        <div className={s.postStyle} >
           {props.textPost}
           <br></br>
           <button onClick={onDeletePost} className={s.deleteBtnStyle}>Delete this post</button>
        </div>
    )
}
export default PostUnit;