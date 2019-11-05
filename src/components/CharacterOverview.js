import React from 'react';
import PropTypes from 'prop-types';

export const CharacterOverview = ({ name, image, handleCharacterSelect }) => (
  <div onClick={handleCharacterSelect}>
    <h2>{name}</h2>
    <img src={image} alt={'image of ' + name} />
  </div>
);

CharacterOverview.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  handleCharacterSelect: PropTypes.func.isRequired
};
