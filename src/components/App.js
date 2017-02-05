import React, { Component } from 'react';
import Charity from './charity/Charity.js';
import Donations from './donations/Donations.js';
import charityRequest from '../lib/charityrequest.js';
import donationRequest from '../lib/donationrequest.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      charityInfo: {
        charityName: '',
        charityInfo: '',
        charityWebsite: '',
        logoUrl: ''
      },
      donations: []
    };

    charityRequest('number', (err, charityInfo) => {
      if (err) console.log(err);
      this.setState({ charityInfo });
    });

    donationRequest('number', (err, donations) => {
      this.setState({
        donations: donations,
      });
    })
  }

  render () {
    return (
      <div>
        <h1>Fundraising!</h1>
        <Charity info={this.state.charityInfo} />
        <Donations donations={this.state.donations} />
      </div>
    );
  }
};

export default App;
