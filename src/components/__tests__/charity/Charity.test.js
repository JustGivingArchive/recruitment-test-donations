import React from 'react';
import renderer from 'react-test-renderer';
import Charity from '../../charity/Charity.js';

describe('Test charity info componenet', () => {

  const info = {
    charityName: 'x',
    charityDescription: 'a real charity',
    charityWebsite: 'http://arealwebsite.com'
  }

  it('renders correctly', () => {
    const tree = renderer.create(
      <Charity info={info} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
