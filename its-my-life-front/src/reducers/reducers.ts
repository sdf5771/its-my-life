import {combineReducers} from "redux";
import authReducer from "./auth/authReducer";
import authChangeFormReducer from "./auth/authChangeFormReducer";

const rootReducer = combineReducers({
    authReducer,
    authChangeFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
