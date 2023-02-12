import React, {ReactElement} from 'react';
import styles from "stylesheets/public/PublicRadiusButton.module.css";

type PublicRadiusButtonType = {
    icon: ReactElement | undefined,
    theme: string,
    buttonContent: string,
    onClickListener: Function,
}

function PublicRadiusButton({icon, theme, buttonContent, onClickListener}:PublicRadiusButtonType){
    let themeVar = theme === "white" ? styles.white_theme_btn : styles.blue_theme_btn

    const onClickHandler = (event:React.MouseEvent) =>{
        onClickListener(event);
    }

    return(
        <button onClick={onClickHandler} className={themeVar}>{icon} {buttonContent}</button>
    );
}

export default PublicRadiusButton;
