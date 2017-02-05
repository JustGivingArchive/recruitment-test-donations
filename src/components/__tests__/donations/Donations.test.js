import React from 'react';
import renderer from 'react-test-renderer';
import Donations from '../../donations/Donations.js';

describe('Test donation info componenet', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Donations />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
