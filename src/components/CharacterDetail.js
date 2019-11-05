import React from 'react';
import PropTypes from 'prop-types';
import { getCharacters } from '../services/getCharacters';

export default class CharacterDetail extends React.Component {

  state = { 
    name: '', 
    photoUrl: '', 
    gender: '',
    hair: '',
    position: '',
    allies: [], 
    enemies: [], 
    affiliation: '', 
  }

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    getCharacters({ id })
      .then(item => this.setState({ ...item }));
  }

  render() {
    const { photoUrl, gender, hair, position, allies, enemies, affiliation } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <img src={photoUrl} alt={'image of ' + name} />
        <dl>
          {gender && <dd>Gender: {gender}</dd>}
          {hair && <dd>Hair: {hair}</dd>}
          {position && <dd>Position: {position}</dd>}
          {allies && <dd>Allies: {allies.join(', ')}</dd>}
          {enemies && <dd>Enemies: {enemies.join(', ')}</dd>}
          <dd>Affiliation: {affiliation || 'unknown'}</dd>
        </dl>
        <button onClick={this.handleClose}>Close</button>
      </div>
    );
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
    history: PropTypes.object.isRequired,
  }

}
