import { SET_SUBMIT_SUCCEEDED } from './types'
export const addEvent = event => (dispatch) => {
    console.log(event)
    fetch(`/api/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            dispatch({
                type: SET_SUBMIT_SUCCEEDED,
                payload: true
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};