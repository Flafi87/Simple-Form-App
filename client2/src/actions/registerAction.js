import REGISTER_FIELD from './types'

export const registerField = field => (dispatch) => {
    console.log(field)

    dispatch({
        type: REGISTER_FIELD,
        name: field.name,
        payload: true
    })

};