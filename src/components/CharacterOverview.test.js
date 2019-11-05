import React from 'react';
import { shallow } from 'enzyme';
import { CharacterOverview } from './CharacterOverview';

describe('Character Overview component', () => {
  it('renders character overview', () => {
    const item = {
      name: 'Fire Nation councilwoman',
      image: 'https://vignette.wikia.nocookie.net/avatar/images/f/f9/Fire_Nation_councilwoman.png/revision/latest?cb=20121110144847',
    };

    const wrapper = shallow(<CharacterOverview name={item.name} image={item.image} handleCharacterSelect={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
