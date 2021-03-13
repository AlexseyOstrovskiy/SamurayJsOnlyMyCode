let initialState ={
    myPosts:[
        {id:1, postText:'Some text for my post from state'},
        {id:1, postText:'This text is harcoding in profileReducer'}
    ],
    newPostText: ' '
};

const profileReducer = (state=initialState) =>{
return state;
}
export default profileReducer;