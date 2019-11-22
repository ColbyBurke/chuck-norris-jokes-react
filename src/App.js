import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke'
import Axios from './components/Axios'
import Form from './components/Form'
import InputForm from './components/InputForm'

function App() {
  return (
    <div className="App">
      <h1>Find jokes for each category</h1>
      <Form></Form>
      <h2>Or add your own</h2>
      <InputForm></InputForm>
    </div>
  );
}

export default App;
