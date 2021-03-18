import { HOME, HOME_ERROR } from './constants';

const home = (data) => async dispatch => {
    try {
        console.log("actions", data);
        dispatch({
            type: HOME,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: HOME_ERROR
        });
    }
};
export default home