import React, { Component } from 'react';
import { getCharacters } from '../services/getCharacters';

export default class Home extends Component  {

  state = {
    randomImgUrl: '',
  }

  apiGetRandomCharacter = () => {
    getCharacters({ getARandomOne: true })
      .then(([{ photoUrl }]) => this.setState({ randomImgUrl: photoUrl }));
  }

  componentDidMount() {
    this.apiGetRandomCharacter();
  }  

  render() {
    return (
      <>
        <img src={this.state.randomImgUrl} />
        <button onClick={this.apiGetRandomCharacter}>See Another</button>
      </>
    );
  }

}
