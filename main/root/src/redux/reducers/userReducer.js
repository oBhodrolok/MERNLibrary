import { EDIT_PROFILE, LOGIN, LOGOUT, REGISTER } from "../actions/type"

const initialState = {
    isAuthenticated: false,
    user: {}
}


export default function(state = initialState , action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
        // case REGISTER:
        //     return {
        //         ...state,
        //     }
        case EDIT_PROFILE:
            return {
                ...state
            }
        default:
            return state

    }
    return state;
}
