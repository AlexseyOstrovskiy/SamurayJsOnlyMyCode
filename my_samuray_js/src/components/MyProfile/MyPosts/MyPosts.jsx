import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import PostUnitContainer from './PostUnit/PostUnitContainer';



const MyPosts =(props)=>{
    let newPostText = React.createRef();
    let postElements = props.posts.map((p) => <PostUnitContainer textPost = {p.postText} id={p.id}/>);

    let onPostChange=()=>{
        let text = newPostText.current.value;
        props.updateNewPostValue(text);

    }

    let onAddPost =()=>{
            props.addNewPost()
    }
    
    return (
        <div className={s.MyPosts}>
           <div>
               <div>Create new my post:</div>
               <textarea ref={newPostText} onChange={onPostChange} value={props.textPostFromState}
               rows="3" cols="70" wrap="hard"> 
               </textarea>
               <br></br>
               <button onClick={onAddPost}>Add post</button>
           </div>
           <div>
               {postElements}
           </div>
        </div>
    )
}
export default MyPosts;