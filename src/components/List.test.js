import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

jest.mock('../services/getCharacters', () => ({
  getCharacters() {
    return Promise.resolve([
      {
        _id: '5cf5679a915ecad153ab6927',
        allies: ['Her husband'],
        enemies: ['Amon'],
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/f/f9/Fire_Nation_councilwoman.png/revision/latest?cb=20121110144847',
        name: 'Fire Nation councilwoman',
        gender: 'Female',
        hair: 'Gray',
        love: 'Her husband',
        weapon: 'Fire',
        profession: 'Councilwoman ',
        position: 'Fire Nation representative to the United Republic Council (formerly) Upper-class United Republic citizen',
        affiliation: 'Fire Nation United Republic Council (formerly)',
      }
    ]);
  }
}));

describe('List component', () => {
  it('renders', () => {
    const wrapper = shallow(<List 
      match={{
        params: {
          search: '',
          page: '1'
        }
      }}
      history={{}} 
      perPage={10}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
