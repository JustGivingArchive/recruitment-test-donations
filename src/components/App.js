import React, { Component } from 'react';

import charityRequest from '../lib/charityrequest.js';
import donationRequest from '../lib/donationrequest.js'
import Content from './Content.js';
import SeeMore from './Seemore.js'

class App extends Component {
  constructor () {
    super();
    this.state = {
      charityInfo: null,
      donations: null,
      charityLoaded: false,
      donationsLoaded: false,
      dropDown: true
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.newCharity = this.newCharity.bind(this);
  }

  toggleDropDown () {
    this.setState({ dropDown: !this.state.dropDown });
  }

  newCharity (charityNumber) {
    this.setState({
      dropDown: false,
      charityInfo: null,
      donations: null,
      charityLoaded: false,
      donationsLoaded: false
    });

    charityRequest(charityNumber, (err, charityInfo) => {
      if (err) console.log(err);
      if (charityInfo) {
        this.setState({
          charityInfo,
          charityLoaded: true
        });
      }
    });

    donationRequest(charityNumber, (err, donations) => {
      if (err) console.log(err);
      if (donations) {
        this.setState({
          donations,
          donationsLoaded: true
        });
      }
    });
  }

  render () {
    return (
      <div className="app">
        <div className="header">
        <h1 className="main_title">Just Giving</h1>
        {!this.state.dropDown && <SeeMore toggle={this.toggleDropDown} />}
        </div>
        <Content select={this.newCharity} {...this.state} />
      </div>
    );
  }
}

export default App;
