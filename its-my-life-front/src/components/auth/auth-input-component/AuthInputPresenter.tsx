import {ReactElement, useState} from 'react';
import styles from './AuthInputPresenter.module.css';
import {ReactComponent as EyeIcon} from 'images/auth/eye_icon.svg';
import {ReactComponent as EyeIconCrossed} from 'images/auth/eye_icon_crossed.svg';

type AuthInputPresenterPropType = {
    type: string,
    placeholder: string,
    icon: ReactElement | undefined,
    isEyeIcon: boolean,
}

function AuthInputPresenter({type, placeholder, icon, isEyeIcon }:AuthInputPresenterPropType){
    const [eyeIconCrossed, setEyeIconCrossed] = useState(false);

    const eyeIconClickHandler = (event:React.MouseEvent) => {
        setEyeIconCrossed(!eyeIconCrossed);
    }

    return(
        <div className={styles.auth_input_main}>
            <div className={styles.auth_input_image}>
                {icon ? icon : null}
            </div>
            <div className={styles.auth_input}><input placeholder={placeholder} type={type && type === 'password' ? type : 'text'}/></div>
            { isEyeIcon ?
                eyeIconCrossed ?
                    <div className={styles.eye_icon_container} onClick={eyeIconClickHandler}><EyeIconCrossed width="12" height="12" /></div>
                    : <div className={styles.eye_icon_container} onClick={eyeIconClickHandler}><EyeIcon width="12" height="12"/></div>
                : null}
        </div>
    );
}

export default AuthInputPresenter;
