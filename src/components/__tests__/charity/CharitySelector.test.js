import React from 'react';
import renderer from 'react-test-renderer';
import CharitySelector from '../../charity/CharitySelector.js';

describe('Test charity info componenet', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <CharitySelector />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
