
import { reset } from 'redux-form';

const addEvent = (event) => (dispatch) => {
  fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('Success:', data);
          dispatch(reset('event'));
          dispatch({ type: 'REGISTER_ERROR', payload: '' });
        })
          .catch((error) => {
            dispatch({ type: 'REGISTER_ERROR', payload: error });
          });
      } else {
        const errorMsg = `${response.statusText} error ${response.status}`;
        dispatch({ type: 'REGISTER_ERROR', payload: errorMsg });
      }
    });
};

export default addEvent;
