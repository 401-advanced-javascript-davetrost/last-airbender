import React, { Component } from 'react';
import { getCharacters } from '../services/getCharacters';

export default class Home extends Component  {

  state = {
    randomImgUrl: '',
  }

  componentDidMount() {
    getCharacters({ getARandomOne: true })
      .then(([{ photoUrl }]) => this.setState({ randomImgUrl: photoUrl }));
  }

  render() {
    return (
      <>
        <img src={this.state.randomImgUrl} />
      </>
    );
  }

}
