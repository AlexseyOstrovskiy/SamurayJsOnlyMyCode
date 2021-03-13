import React from 'react';
import s from '../MyPosts/MyPosts.module.css';


const MyPosts =(props)=>{
    let newPostText = React.createRef();
    let postElements = props.posts[1].postText;
    return (

        <div className={s.MyPosts}>
           <div>
               <div>Create new my post:</div>
               <textarea ref={newPostText} placeholder='Write you post'> 
               </textarea>
               <button>Add post</button>
           </div>
           <div>
               {postElements}
           </div>
        </div>
    )
}
export default MyPosts;