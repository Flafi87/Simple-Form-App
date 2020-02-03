import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import addEvent from './actions/eventAction';
import FormPage from './components/FormPage';

function App({ addEvent, error }) {
  const submit = (values) => {
    addEvent(values);
  };
  return (
    <Container>
      <div className="App">
        <Row className="justify-content-md-center">
          <header className="App-header">
            <h1>Simple Form App</h1>
          </header>
        </Row>
        <FormPage onSubmit={submit} />
        {error ? <div className="error">{error}</div> : null}
      </div>
    </Container>
  );
}

App.propTypes = {
  addEvent: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.errors.postError,
});


export default connect(
  mapStateToProps,
  { addEvent },
)(App);
