import React from 'react';
import UserProfilePresenter from "./UserProfilePresenter";
import {deleteCookie} from "../../util/cookie";
import {useNavigate} from "react-router-dom";

function UserProfileContainer(){
    const navigate = useNavigate();
    const logoutBtnClickHandler = (event: React.MouseEvent) => {
        deleteCookie('auth');
        navigate('/');
    }
    return(
        <UserProfilePresenter logoutClickHandler={logoutBtnClickHandler} />
    );
}

export default UserProfileContainer;
