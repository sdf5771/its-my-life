const LOGIN_FORM = 0;
const SIGNUP_FORM = 1;

const initialState = {activeForm: LOGIN_FORM};

type actionType = {type: string, payload: number};

function authChangeFormReducer(currentState: typeof initialState, action: actionType){
    if(currentState === undefined){
        return {activeForm: LOGIN_FORM};
    }
    const newState = {...currentState};

    switch (action.type){
        case 'active login':
            newState.activeForm = LOGIN_FORM;
            break
        case 'active signUp':
            newState.activeForm = SIGNUP_FORM;
            break
    }

    return newState
}

export default authChangeFormReducer;
