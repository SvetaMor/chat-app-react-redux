import { LOGIN } from '../constants';

let initialState = {
    isAuth: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: action.value
            }
        default:
            return state;
    }
}

export const login = (value) => ({type: LOGIN, value});

export default appReducer;
