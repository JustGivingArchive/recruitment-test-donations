import React from 'react';
import renderer from 'react-test-renderer';
import SeeMore from '../Seemore.js';

describe('Test Intro component', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <SeeMore toggle={ () => null }/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
