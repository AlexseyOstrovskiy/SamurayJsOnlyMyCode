import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";
let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(id)=>{
            dispatch(followAC(id))
        },
        unfollow:(id)=>{
            dispatch(unFollowAC(id))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
