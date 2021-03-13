import React from 'react';
import s from '../MyProfile/MyProfile.module.css';
import AboutMe from './AboutMe/AboutMe';
import MyFriends from './MyFriends/MyFriends';
import MyPhoto from './MyPhoto/MyPhoto';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const MyProfile =(props)=>{
    return (

        <div className={s.MyProfile}>
            <div className={s.myProfileWrapper}>
                <MyPhoto />
                <AboutMe />
                <MyPostsContainer />
                <MyFriends />
            </div>
        </div>
    )
}
export default MyProfile;