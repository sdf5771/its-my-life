import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {getCookie} from "util/cookie";
/*
* Custom Hook Name : useCheckAuthRedirect
* 'auth' 라는 쿠키 값 여부를 체크하고 존재하지 않는다면 /auth 경로로 redirect 시켜줌
* */
const useCheckAuthRedirect = () => {
    const navigate = useNavigate();
    useEffect( () => {
        const authCookie = getCookie('auth');
        if(!authCookie){
            navigate('/auth');
        }
    })
}

export default useCheckAuthRedirect;
