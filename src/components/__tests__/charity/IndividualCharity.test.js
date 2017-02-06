import React from 'react';
import renderer from 'react-test-renderer';
import IndividualCharity from '../../charity/IndividualCharity.js';

describe('Test charity info componenet', () => {
  const props = {
    name: 'name',
    id: 'id',
    select: () => null
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <IndividualCharity {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
