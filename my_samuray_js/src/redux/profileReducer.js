const UPDATE_NEW_POST_TEXT_IN_TEXT_AREA = 'UPDATE-NEW-POST-TEXT-IN-TEXT-AREA';
const ADD_NEW_POST = 'ADD-NEW-POST'
const DELETE_THIS_POST = 'DELETE-THIS-POST'

let initialState ={
    myPosts:[
        {id:1, postText:'Some text for my post from state'},
        {id:2, postText:'This text is harcoding in profileReducer'},
        {id:3, postText:'Hi, hi, hi'},
        {id:4, postText:'Brrrrrrrrrbo'}
    ],
    newPostText: 'This text from profile-reducer '
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
                    newPostText: ' '
                }
        case DELETE_THIS_POST:
            alert('удалить')
            alert(action.id)
            // alert(state.myPosts[action.id].postText)
            // state.myPosts[action.id-1]=null;
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