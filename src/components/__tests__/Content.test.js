import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from "enzyme";

import Content from '../Content.js';
import CharitySelector from '../charity/CharitySelector.js';

describe('Test content component', () => {
  let state;
  let mounted;
  const content = () => {
    if (!mounted) {
      mounted = mount(
        <Content
          {...state}
          toggle={ () => null }
          select={ () => null }
        />
      );
    }
    return mounted;
  }

  beforeEach(() => {
    state = {
      charityInfo: null,
      donations: null,
      charityLoaded: false,
      donationsLoaded: false,
      dropDown: true
    };
    mounted = undefined;
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <Content
        {...state}
        toggle={ () => null }
        select={ () => null }
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("wrapping div contains everything", () => {
    const divs = content().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(content().children());
  });
});
