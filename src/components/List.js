import React, { Component } from 'react';
import { getCharacters } from '../services/getCharacters';
import PropTypes from 'prop-types';
import { CharacterListDisplay } from './CharacterListDisplay';

export default class List extends Component  {

  state = {
    items: [],
    search: this.props.match.params.search || '*',
    page: this.props.match.params.page || 1,
  }

  apiGetCharacterList = () => {
    const { search, page } = this.state;
    const { perPage } = this.props;
    getCharacters({ search, page, perPage })
      .then(items => this.setState({ items }));
  }
  
  handlePageChange = increment => {
    const { search, page, items } = this.state;
    const { perPage, history } = this.props;
    if(items.length >= perPage) {
      const newPage = Math.max(1, +page + increment);
      this.setState({ page: newPage });
      history.push(`/list/${search}/${newPage}`);
    }
  }
  
  componentDidMount = () => {
    this.apiGetCharacterList();
  }

  componentDidUpdate = (previousProps) => {
    const { page: prevPage } = previousProps.match.params;
    const { page } = this.props.match.params;
    if(prevPage != page) this.apiGetCharacterList();
  }

  handleCharacterSelect = id => {
    const { history } = this.props;
    history.push(`/detail/${id}`);
  }

  render() {
    const items = this.state.items.map(item => (
      <CharacterListDisplay
        key={item._id || item.name}
        name={item.name}
        image={item.photoUrl}
        handleCharacterSelect={() => this.handleCharacterSelect(item._id)} />
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
        search: PropTypes.string,
        page: PropTypes.string
      }).isRequired
    }).isRequired,
    history: PropTypes.object.isRequired,
    perPage: PropTypes.number.isRequired
  }

}
