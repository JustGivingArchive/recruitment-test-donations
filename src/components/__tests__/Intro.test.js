import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../Intro.js';

describe('Test Intro component', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <Intro />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
