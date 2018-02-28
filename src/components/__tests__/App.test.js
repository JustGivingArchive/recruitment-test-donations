import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from "enzyme";

import App from '../App.js';
import Donations from '../donations/Donations.js';
import Content from '../Content.js';

describe('App', () => {
  let props;
  let mounted;
  const app = () => {
    if (!mounted) {
      mounted = mount(
        <App {...props} />
      );
    }
    return mounted;
  }

  beforeEach(() => {
    props = {
    };
    mounted = undefined;
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Always renders a containing div', () => {
    const divs = app().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("wrapping div contains everything", () => {
    const divs = app().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(app().children());
  });

  it("always renders Content", () => {
    expect(app().find(Content).length).toBe(1);
  })
});
