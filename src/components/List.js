import React, { Component } from 'react';
import { getCharacters } from '../services/getCharacters';
import PropTypes from 'prop-types';
import { CharacterListDisplay } from './CharacterListDisplay';

export default class List extends Component  {

  state = {
    items: [],
  }

  apiGetCharacterList = () => {
    const { search, page } = this.props.match.params;
    console.log('page', page);
    console.log('search', search);
    
    getCharacters({ search, page })
      .then(items => this.setState({ items }));
  }
  
  handlePageChange = increment => {
    const { search, page } = this.props.match.params;
    const newPage = Math.max(1, +(page || 1) + increment);
    this.props.history.push(`/list/${search}/${newPage}`);
  }

  componentDidMount = () => {
    this.apiGetCharacterList();
  }

  componentDidUpdate = (previousProps) => {
    const { page: prevPage } = previousProps.match.params;
    const { page } = this.props.match.params;
    if(prevPage != page) this.apiGetCharacterList();
  }

  handleCharacterSelect = item => {
    console.log(item);
  }

  render() {
    const items = this.state.items.map(item => (
      <CharacterListDisplay
        key={item._id || item.name}
        name={item.name}
        image={item.photoUrl}
        handleClick={() => this.handleCharacterSelect(item)} />
    ));
  
    return (
      <>
        <button onClick={() => this.handlePageChange(-1)}>Prev</button>
        <button onClick={() => this.handlePageChange(+1)}>Next</button>
        <div>
          {items}
        </div>
      </>
    );
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        search: PropTypes.string.isRequired,
        page: PropTypes.string
      }).isRequired
    }).isRequired,
    history: PropTypes.object.isRequired
  }

}
