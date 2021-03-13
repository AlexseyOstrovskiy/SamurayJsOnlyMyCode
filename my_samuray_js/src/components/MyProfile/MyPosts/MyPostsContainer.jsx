import { connect } from 'react-redux';
import MyPosts from "./MyPosts";
import {updateNewPostTextInTextAreaAC, addNewPostAC } from '../../../redux/profileReducer'

let mapStateToProps = (state) =>{
    return{
        posts:state.profile.myPosts,
        textPostFromState: state.profile.newPostText
    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostValue:(text) =>{
            dispatch(updateNewPostTextInTextAreaAC(text));
        },
        addNewPost:() =>{
            dispatch(addNewPostAC())
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 
export default MyPostsContainer;