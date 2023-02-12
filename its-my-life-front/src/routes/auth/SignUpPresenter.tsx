import React, {useRef} from 'react';
import styles from 'stylesheets/auth/SignUpPresenter.module.css';
import AuthInputContainer from "../../components/auth/auth-input-component/AuthInputContainer";
import PublicRadiusButton from "../../components/public/PublicRadiusButton";
import {useDispatch} from "react-redux";

function SignUpPresenter(){
    const signUpContainerRef = useRef<HTMLDivElement>(null);
    const loginPageClickDispatch = useDispatch();

    const signUpClickHandler = (event: React.MouseEvent) => {

    }

    const activeLoginPageClickHandler = (event: React.MouseEvent) => {
        if(signUpContainerRef.current){
            const currentRef = signUpContainerRef.current;
            const animateKeyFrame = [{opacity: 1}, {opacity:0}]
            currentRef.animate(animateKeyFrame,{duration: 350, fill: 'both'})
            setTimeout(() => {
                loginPageClickDispatch({type: 'active login'});
            },400)
        }
    }

    return(
        <div ref={signUpContainerRef} className={styles.sign_up_main}>
            <div className={styles.sign_up_header}><span>Join Us</span></div>
            <div className={styles.sign_up_body}>
                <div className={styles.sign_up_input_container}>
                    <AuthInputContainer type="name" placeholder="닉네임" />
                    <AuthInputContainer type="email" placeholder="이메일" />
                    <AuthInputContainer type="password" placeholder="비밀번호" />
                    <AuthInputContainer type="password" placeholder="비밀번호 확인" />
                </div>
                <div className={styles.btn_container}>
                    <PublicRadiusButton icon={undefined} theme="blue" buttonContent="가입하기" onClickListener={signUpClickHandler} />
                </div>
                <div className={styles.btn_container}>
                    <PublicRadiusButton icon={undefined} theme="white" buttonContent="뒤로가기" onClickListener={activeLoginPageClickHandler} />
                </div>
            </div>
        </div>
    );
}

export default SignUpPresenter;
