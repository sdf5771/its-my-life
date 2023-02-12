import {useEffect} from 'react';
import HomePresenter from './HomePresenter';
import useCheckAuthRedirect from "hooks/useCheckAuthRedirect";

function HomeContainer(){
    useCheckAuthRedirect(); // auth cookie 여부 체크

    return(
        <HomePresenter />
    )
}

export default HomeContainer;
