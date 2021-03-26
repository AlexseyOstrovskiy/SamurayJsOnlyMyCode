const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState={
    users:[
        // {id:1,followed:false, fullName:'Alex', status:'I can all do!', location:{city:'Mogilev', country:'Belarus'}},
        // {id:2,followed:true, fullName:'Jhon', status:'I need a new job, man! ', location:{city:'Minsk', country:'Belarus'}},
        // {id:3,followed:false, fullName:'Will', status:'I very good programmer!', location:{city:'Vitebsk', country:'Belarus'}},
        // {id:4,followed:true, fullName:'Joshua', status:'I love beer man!', location:{city:'Kiev', country:'Ukrain'}},
    ]
}

const usersReducer = (state= initialState, action) =>{
    switch(action.tipe){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users:[...state.users, ...action.users]
        }
        default:
            return state;
    }
}

export const followAC=(id)=>({type:FOLLOW}, id=id);
export const unFollowAC = (id)=>({type:UNFOLLOW}, id=id);
export const setUsersAC = (users) =>({type:SET_USERS}, users=users);
export default usersReducer;