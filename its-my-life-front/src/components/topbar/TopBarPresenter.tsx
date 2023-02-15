import React from 'react';
import styles from 'components/topbar/TopBarPresenter.module.css'
import ClockContainer from "../clock/ClockContainer";
import ToggleBtnContainer from "./ToggleBtnContainer";
import UserProfileContainer from "../userProfile/UserProfileContainer";

function TopBarPresenter(){
    return(
        <div className={styles.top_bar_main}>
            <div className={styles.left_bar_container}>
                <div className={styles.menu_btn_container}><div className={styles.menu_btn}></div></div>

                <ClockContainer />
            </div>
            <div>
                <UserProfileContainer />
            </div>
            <div>
                <ToggleBtnContainer />
            </div>
        </div>
    );
}

export default TopBarPresenter;
