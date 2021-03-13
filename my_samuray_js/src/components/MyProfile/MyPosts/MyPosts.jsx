import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import PostUnit from './PostUnit/PostUnit';



const MyPosts =(props)=>{
    let newPostText = React.createRef();
    let postElements = props.posts.map((p) => <PostUnit textPost = {p.postText}/>);
    return (

        <div className={s.MyPosts}>
           <div>
               <div>Create new my post:</div>
               <textarea ref={newPostText} placeholder='Write you post'> 
               </textarea>
               <br></br>
               <button>Add post</button>
           </div>
           <div>
               {postElements}
           </div>
        </div>
    )
}
export default MyPosts;