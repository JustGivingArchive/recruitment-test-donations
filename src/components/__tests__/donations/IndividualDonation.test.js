import React from 'react';
import renderer from 'react-test-renderer';
import IndividualDonation from '../../donations/IndividualDonation.js';

describe('Test donation info componenet', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <IndividualDonation />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
