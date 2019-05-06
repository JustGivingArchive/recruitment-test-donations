
import React, { Component } from 'react';

import CharityItem from '../CharityItem/CharityItem'
import CharityDonations from '../CharitiyDonations/CharityDonations'


class Charity extends Component {
    constructor() {
        super();
        this.callToApi = this.callToApi.bind(this);
        this.callToApiDonation = this.callToApiDonation.bind(this);
        this.state = {
            data: [],
            donations: [],
            dataIsLoading: true,
            donationsIsLoading: true,
        }
        
    }

    callToApi() {
        // const headers = new Headers({'content-type': 'application/json'})
        fetch(`https://api.justgiving.com/${process.env.APP_ID}/v1/charity/${process.env.CHARITY_ID}`,
             {
                headers : { 
                  'Content-Type': 'application/json'
                 }
              }).then(response => {
                    return response.json()
              })
              .then((data) => {
                    this.setState({
                            data: data,
                            dataIsLoading: false
                        })
              })  
    }

    callToApiDonation() {
        const headers = new Headers({'content-type': 'application/json'})
        fetch(`https://api.justgiving.com/${process.env.APP_ID}/v1/charity/${process.env.CHARITY_ID}/donations`,
             {
                headers : { 
                  'Content-Type': 'application/json'
                 }
              }).then(response => {
                    return response.json()
              })
              .then((data) => {
                    this.setState({
                        donations: data.donations,
                        donationsIsLoading: false
                    })
              })  
    }

    componentWillMount () {
        this.callToApi()
        this.callToApiDonation()
    } 

    render() {
        const {
            categories,
            name,
            impactStatementWhat, 
            impactStatementWhy,
            logoAbsoluteUrl
            } = this.state.data
            
       
        return (
            <div>
                 { this.state.donationsIsLoading ?  "loading" :
                 <CharityItem
                    name={name}
                    logo={logoAbsoluteUrl} 
                    categories={categories}
                    impactStatementWhat={impactStatementWhat}
                    impactStatementWhy={impactStatementWhy }
                    />  
                    }
                  
                 { this.state.donationsIsLoading ? "loading": <CharityDonations donations={this.state.donations}/>}     
            </div>
           
        )
    }
}

export default Charity;

