import { HOME, HOME_ERROR } from './../actions/constants';

const initialState = { user: null };


export default function homeReducer(state = initialState, action) {
    const { type, payload } = action
    console.log("reducer payload", payload)
    switch (type) {
        case HOME:
            return {
                ...state,
                userData: payload
            }
        case HOME_ERROR:
        default:
            return state;
    }
}