import React, {ReactElement, useRef} from 'react';
import styles from 'stylesheets/auth/LoginPresenter.module.css'
import AuthInputContainer from "components/auth/auth-input-component/AuthInputContainer";
import {ReactComponent as GoogleLogo} from 'images/auth/google_login_logo.svg';
import {ReactComponent as KakaoLogo} from 'images/auth/kakao_login_logo.svg';
import {useDispatch} from "react-redux";
import PublicRadiusButton from "../../components/public/PublicRadiusButton";
import {useNavigate} from "react-router-dom";

function LoginPresenter(){
    const navigate = useNavigate();
    const loginContainerRef = useRef<HTMLDivElement>(null);
    const signUpClickDispatch = useDispatch();
    const forgotPasswordOnClickHandler = (event: React.MouseEvent) => {
        console.log(event)
    }

    const signUpOnClickHandler = (event: React.MouseEvent) => {
        if(loginContainerRef.current){
            const currentRef = loginContainerRef.current
            const animateKeyFrame = [{opacity: 1}, {opacity: 0}]
            currentRef.animate(animateKeyFrame, {duration: 350, fill: 'both'})
            setTimeout(() => {
                signUpClickDispatch({type: 'active signUp'})
            },400)
        }
    }

    const loginOnClickHandler = (event: React.MouseEvent) => {
        navigate('/');
    }

    const googleLoginOnClickHandler = (event: React.MouseEvent) => {

    }

    const kakaoLoginOnClickHandler = (event: React.MouseEvent) => {

    }

    return(
        <div ref={loginContainerRef} className={styles.login_main}>
            <div className={styles.login_header}><span>Welcome</span></div>
            <div className={styles.login_body}>
                <div className={styles.input_container}>
                    <AuthInputContainer type="email" placeholder="이메일" />
                    <AuthInputContainer type="password" placeholder="비밀번호" />
                </div>
                <div className={styles.forgot_password_container} onClick={forgotPasswordOnClickHandler}><span> 비밀번호를 잊으셨나요? </span></div>
                <div className={styles.btn_container}>
                    <PublicRadiusButton icon={undefined} theme="blue" buttonContent="Log in" onClickListener={loginOnClickHandler} />
                </div>
                <div className={styles.cross_line_container}>
                    <div className={styles.line}></div>
                    <div><span>or</span></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.btn_container}>
                    <PublicRadiusButton icon={<GoogleLogo width="16px" height="16px" />} theme="white" buttonContent="continue with google" onClickListener={googleLoginOnClickHandler} />
                </div>
                <div className={styles.btn_container}>
                    <PublicRadiusButton icon={<KakaoLogo width="16px" height="16px"/>} theme="blue" buttonContent="continue with kakao" onClickListener={kakaoLoginOnClickHandler} />
                </div>
                <div className={styles.sign_up_container}>
                    <span>아직 계정이 없으신가요?</span>
                    <span onClick={signUpOnClickHandler}>회원가입</span>
                </div>
            </div>
        </div>
    );
}

export default LoginPresenter;
