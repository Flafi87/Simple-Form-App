/* eslint-disable import/no-mutable-exports */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button, Form, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';


/** Validators
 *
 */
const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = (max) => (value) => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
export const minLength = (min) => (value) => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
export const minLength2 = minLength(2);

const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);

const alphaNumeric = (value) => (value && /[^a-zA-ZÀ-ÿ0-9AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]/i.test(value)
  ? 'Only alphanumeric characters'
  : undefined);

const date = (value) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (value === undefined) {
    return (undefined);
  }
  const d = new Date(value);
  if (yesterday > d) {
    return ('Event can be only in the future');
  } return undefined;
};

/** Rendering input fields with errors */
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <Form.Group>
    <label htmlFor={input.name}>{label}</label>
    <Form.Group>
      <input {...input} placeholder={label} type={type} />
      {touched
                    && ((error && (
                    <div className="error">
                      {error}
                      !
                    </div>
                    ))
                        || (warning && (
                        <div className="error">
                          {warning}
                          !
                        </div>
                        )))}
    </Form.Group>
  </Form.Group>
);

renderField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func])).isRequired,
  meta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])).isRequired,
};

let FormPage = ({ handleSubmit }) => (
  <Row>
    <Col>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Field
            name="firstName"
            type="text"
            component={renderField}
            label="First Name"
            validate={[required, maxLength15, minLength2]}
            warn={alphaNumeric}
          />
        </Form.Group>
        <Form.Group>
          <Field
            name="secondName"
            type="text"
            component={renderField}
            label="Last Name"
            validate={[required, maxLength15, minLength2]}
            warn={alphaNumeric}
          />
        </Form.Group>
        <Form.Group>
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
            validate={[required, email]}
          />
        </Form.Group>
        <Form.Group>
          <Field
            name="eventDate"
            type="date"
            component={renderField}
            label="Event Date"
            validate={[required, date]}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Col>
  </Row>

);

FormPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

FormPage = reduxForm({
  /** Unique name of the form */
  form: 'event',
})(FormPage);

export default FormPage;
