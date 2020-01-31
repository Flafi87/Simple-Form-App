import React from 'react'
import Field from './Field'
import { useState } from 'react'


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

const date = value => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (value === undefined) {
        return (undefined)
    }
    var d = new Date(value);
    if (yesterday > d) {
        return ('Event can be only in the future')
    } else {
        return undefined
    }
}


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}!</span>) ||
                        (warning && <span>{warning}!</span>))}
            </div>
        </div>
    )

let Form = props => {

    const [form, setForm] = useState()

    const handleChange = (event) => {
        setForm()
    }

    const { handleSubmit } = props
    return (
        <Field handleChange={handleChange} value={form} />
    )
}


export default Form