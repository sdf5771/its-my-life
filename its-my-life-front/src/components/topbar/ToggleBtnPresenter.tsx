import React from 'react';
import styles from "./ToggleBtnPresenter.module.css";

function ToggleBtnPresenter(){
    return(
        <div className={styles.top_bar_toggle_container}>
            <div className={`${styles.toggle_btn} ${styles.active}`}><span> 대시보드 </span></div>
            <div className={styles.toggle_btn}><span> 캘린더 </span></div>
        </div>
    );
}

export default ToggleBtnPresenter;
