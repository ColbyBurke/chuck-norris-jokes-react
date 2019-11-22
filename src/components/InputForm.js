import React from "react";
import {
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import axios from "axios";
import Explicit from './Explicit'
import Nerdy from './Nerdy'

export default class InputForm extends React.Component {
  state = {
    joke: '',
    category: ["none"]
  }

  handleChangeCategory = e => {
    this.setState({ category: e.target.value });
  }

  handleChangeJoke = e => {
      console.log(this.state.joke);
      
    this.setState({ joke: e.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

      axios.post('http://localhost:2500/jokes', {
        joke: this.state.joke,
        category: this.state.category
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
    <form>
        <label htmlFor="joke-input">Enter a joke:</label>
        <Input id="joke-input" onChange={this.handleChangeJoke}></Input>
        <Select value={this.state.category} onChange={this.handleChangeCategory}>
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="explicit">Explicit</MenuItem>
          <MenuItem value="nerdy">Nerdy</MenuItem>
        </Select>
        <Button onClick={this.handleSubmit}>Click</Button>
      </form>
    )
  }
}