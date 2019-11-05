import React, { Component } from 'react';
import { getCharacters } from '../services/getCharacters';
import PropTypes from 'prop-types';

export default class Home extends Component  {

  state = {
    randomImgUrl: '',
    randomImgName: '',
    search: '',
  }

  apiGetRandomCharacter = () => {
    getCharacters({ getARandomOne: true })
      .then(([{ photoUrl, name }]) => this.setState({ randomImgUrl: photoUrl, randomImgName: name }));
  }

  componentDidMount() {
    this.apiGetRandomCharacter();
  }  

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.search}`);
  }
  
  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  render() {
    const { randomImgUrl, randomImgName, search } = this.state;
    return (
      <>
        <img src={randomImgUrl} alt={'image of ' + randomImgName} />
        <button onClick={this.apiGetRandomCharacter}>See Another</button>
        <form>
          <input type="search" name="search" value={search} onChange={this.handleSearchChange} />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </>
    );
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

}
