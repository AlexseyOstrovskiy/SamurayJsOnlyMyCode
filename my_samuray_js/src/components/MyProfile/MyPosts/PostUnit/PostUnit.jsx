import React from 'react';
import s from './PostUnit.module.css';


const PostUnit =(props)=>{
    
    return (
        <div className={s.postStyle} >
           {props.textPost}
        </div>
    )
}
export default PostUnit;