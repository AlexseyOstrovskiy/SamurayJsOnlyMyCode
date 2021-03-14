const UPDATE_NEW_POST_TEXT_IN_TEXT_AREA = 'UPDATE-NEW-POST-TEXT-IN-TEXT-AREA';
const ADD_NEW_POST = 'ADD-NEW-POST'
const DELETE_THIS_POST = 'DELETE-THIS-POST'
let postForDeleted;
let idForDelete;

let initialState ={
    myPosts:[
        {id:1, postText:'Some text for my post from state'},
        {id:2, postText:'This text is harcoding in profileReducer'},
        {id:3, postText:'Hi, hi, hi'},
        {id:4, postText:'Brrrrrrrrrbo'}
    ],
    newPostText: 'This text from profile-reducer ',
    myPostsLength:4
};

const profileReducer = (state=initialState, action) =>{
    switch(action.type){
        case UPDATE_NEW_POST_TEXT_IN_TEXT_AREA:
            return{
                ... state,
                newPostText:action.newText
            };
        case ADD_NEW_POST:
            let newPost ={
                id: state.myPosts.length +1,
                postText:state.newPostText
            };
                return{
                    ...state,
                    myPosts:[...state.myPosts, newPost ],
                    newPostText: ' ',
                    myPostsLength: state.myPosts.length + 1
                }
        case DELETE_THIS_POST:
            // alert('удалить' +action.id)
            // indexForDeleted = state.myPosts.indexOf(action.id)
            postForDeleted=state.myPosts.find(item =>item.id == action.id)
            idForDelete = state.myPosts.indexOf(postForDeleted)
            // alert('indexForDeleted  ' + postForDeleted.id)
            console.log(postForDeleted)
            console.log(postForDeleted.id)
            state.myPosts.splice(postForDeleted.id -1, 1)
            return{    
                    ...state,
                    myPosts:[...state.myPosts]
            }
        default:
            return state;
    }

}
           
export const updateNewPostTextInTextAreaAC =(text)=>({type:UPDATE_NEW_POST_TEXT_IN_TEXT_AREA, newText:text});
export const addNewPostAC = () =>({type:ADD_NEW_POST});
export const deleteThisPostAC = (id) =>({type:DELETE_THIS_POST, id:id});
export default profileReducer;