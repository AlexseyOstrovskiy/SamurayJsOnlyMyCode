let initialState ={
    myPosts:[
        {id:1, postText:'Some text for my post from state'},
        {id:1, postText:'This text is harcoding in profileReducer'},
        {id:1, postText:'Hi, hi, hi'},
        {id:1, postText:'Brrrrrrrrrbo'}
    ],
    newPostText: ' '
};

const profileReducer = (state=initialState) =>{
return state;
}
export default profileReducer;