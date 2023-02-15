import React, {useRef, useState} from 'react';
import styles from './UserProfilePresenter.module.css'
import {ReactComponent as UserIcon} from 'images/auth/user.svg';
import {getCookie} from "util/cookie";

type UserProfilePresenterType = {
    logoutClickHandler: React.MouseEventHandler
}

function UserProfilePresenter({logoutClickHandler}:UserProfilePresenterType){
    const username = getCookie('username');
    const email = getCookie('email');
    return(
        <div className={styles.user_profile_main}>
            <div className={styles.user_profile_image_container}>
                <UserIcon width='15px' height='15px'/>
            </div>
            <div className={styles.user_authinfo_container}>
                <div><span>{username}</span></div>
                <div><span>{email}</span></div>
            </div>
            <div className={styles.user_profile_btn_container}>
                <div onClick={logoutClickHandler} className={styles.user_profile_logout_btn}>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default UserProfilePresenter;
