import {ReactElement, useState} from 'react';
import AuthInputPresenter from "./AuthInputPresenter";
import { ReactComponent as MailIcon } from 'images/auth/mail_icon.svg';
import { ReactComponent as LockIcon} from 'images/auth/lock_icon.svg';
import { ReactComponent as UserIcon} from 'images/auth/user.svg';

type AuthInputContainerPropType = {
    type: string,
    placeholder: string,
}

const iconComponents = {
    mailIcon: <MailIcon width="13" height="13" />,
    passwordIcon: <LockIcon width="13" height="13" />,
    userIcon: <UserIcon width="13" height="13" />,
}

function AuthInputContainer({ type, placeholder }: AuthInputContainerPropType){
    let icon;
    let isEyeIcon = false

    switch (type){
        case 'email':
            icon = iconComponents.mailIcon;
            break
        case 'password':
            icon = iconComponents.passwordIcon;
            isEyeIcon = true;
            break
        case 'name':
            icon = iconComponents.userIcon;
            break

        case '':
            break

        default:
            throw Error
    }

    return(
        <AuthInputPresenter type={type} placeholder={placeholder} icon={icon} isEyeIcon={isEyeIcon}/>
    );
}

export default AuthInputContainer;
