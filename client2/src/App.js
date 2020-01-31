import React from 'react';
import './App.css';
import Form from './components/Form'
import { connect } from 'react-redux';
import { addEvent } from './actions/eventAction'

function App({ error, addEvent }) {
  const submit = (values) => {
    addEvent(values)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Form App</h1>
      </header>
      <Form onSubmit={submit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.form,
});

export default connect(
  mapStateToProps,
  { addEvent },
)(App);
