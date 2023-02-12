import React from 'react';
import styles from 'stylesheets/home/HomePresenter.module.css'
import TopBarContainer from 'components/topbar/TopBarContainer';
function HomePresenter(){

    return(
        <div className={styles.home_presenter_main}>
            <TopBarContainer />
            <div className={styles.home_presenter_container}>

            </div>
        </div>
    )
}

export default HomePresenter;
