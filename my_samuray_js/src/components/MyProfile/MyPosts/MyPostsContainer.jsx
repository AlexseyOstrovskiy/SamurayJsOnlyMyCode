import { connect } from 'react-redux';
import MyPosts from "./MyPosts";


let mapStateToProps = (state) =>{
    return{
        posts:state.profile.myPosts
    }
};
let mapDispatchToProps = () =>{};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 
export default MyPostsContainer;