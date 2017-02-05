import React from 'react';
import renderer from 'react-test-renderer';
import Charity from '../../charity/Charity.js';

describe('Test charity info componenet', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Charity />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
