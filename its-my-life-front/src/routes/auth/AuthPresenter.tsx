import React from 'react';
import styles from 'stylesheets/auth/AuthPresenter.module.css';
import LoginContainer from "./LoginContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/reducers";
import SignUpContainer from "./SignUpContainer";

const activeForms = {
    0: <LoginContainer />,
    1: <SignUpContainer />,
}

function AuthPresenter(){
    const useActionFormSelector = useSelector((state:RootState) => state.authChangeFormReducer);

    return(
        <div className={styles.auth_presenter_main}>
            <div className={styles.auth_form_main}>
                <div className={styles.left_side_container}>
                    <div className={styles.background_image}></div>
                </div>
                <div className={styles.right_side_container}>
                    {activeForms[`${useActionFormSelector['activeForm']}`]}
                </div>
            </div>
        </div>
    )
}

export default AuthPresenter;
