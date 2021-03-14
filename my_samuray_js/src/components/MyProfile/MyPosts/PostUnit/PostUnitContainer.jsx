import { connect } from "react-redux";
import PostUnit from "./PostUnit";
import {deleteThisPostAC} from '../../../../redux/profileReducer';

let mapStateToProps = (state) =>{
    return{
        id:state.profile.myPosts.id
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        deleteThisPost:(id) =>{
            dispatch(deleteThisPostAC(id));
        }
    }
};

const PostUnitContainer = connect(mapStateToProps, mapDispatchToProps)(PostUnit);
export default PostUnitContainer;