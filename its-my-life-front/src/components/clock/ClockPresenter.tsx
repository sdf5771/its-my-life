import React, {useState, useEffect} from 'react';
import styles from './ClockPresenter.module.css';
function ClockPresenter(){
    const [time, setTime] = useState('00:00');

    const calcTime = () => {
        const now = new Date();
        const hour = now.getHours();
        let minute = now.getMinutes();

        if(minute < 10){
            return `${hour}:0${minute}`
        } else {
            return `${hour}:${minute}`
        }
    }

    useEffect(() => {
      setInterval(() => {
          let timeStr = calcTime()
          setTime(timeStr);
      }, 1000)
    })
    return(
        <div className={styles.clock_main}>
            <span>{time}</span>
        </div>
    );
}

export default ClockPresenter;
