import React, { Component } from 'react';

import makeRequest from '../lib/makeRequest.js';
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

    makeRequest(`/charityrequest?id=${charityNumber}`)
    .then((charityInfo) => {
      this.setState({
        charityInfo,
        charityLoaded: true
      });
    })
    .catch((err) => {
      console.error('An error happened with donation request', err);
    });

    makeRequest(`/donationrequest?id=${charityNumber}`)
      .then((donations) => {
        this.setState({
          donations,
          donationsLoaded: true
        });
      })
      .catch((err) => {
        console.error('An error happened with charity request', err);
      });
  }

  render () {
    return (
      <div className="app">
        <div className="header">
        <h1 className="main_title">Just Giving Donation Viewer</h1>
        </div>
        <Content
          toggle={this.toggleDropDown}
          select={this.newCharity}
          {...this.state} />
      </div>
    );
  }
}

export default App;
