import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from "enzyme";

import Donations from '../../donations/Donations.js';
import IndividualDonation from '../../donations/IndividualDonation.js';

describe('Test donation info componenet', () => {
  let mounted;
  const exampleDonations = [
    {
      amount: '5',
      message: 'hello',
      imageUrl: 'http://image.jpeg'
    }
  ]
  const donations = () => {
    if (!mounted) {
      mounted = mount(
        <Donations donations={exampleDonations} />
      );
    }
    return mounted;
  }

  beforeEach(() => {
    mounted = undefined;
  });

  it('Matches snapshop correctly', () => {
    const tree = renderer.create(
      <Donations donations={exampleDonations} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Always renders a containing div', () => {
    const divs = donations().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("wrapping div contains everything", () => {
    const divs = donations().find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(donations().children());
  });
});
