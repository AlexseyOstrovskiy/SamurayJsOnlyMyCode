import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC } from "../../redux/users-reducer";
import UsersClassComponent from "./UsersClassComponent";
let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(id)=>{
            dispatch(followAC(id));
        },
        unfollow:(id)=>{
          
            dispatch(unFollowAC(id));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);
export default UsersContainer;
