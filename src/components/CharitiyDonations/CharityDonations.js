import React from "react";
import ReactDOM from "react-dom";
import CharityDonationsItem from '../CharityDonationsItem/CharityDonationsItem'
import './CharityDonations.css'
const CharityDonations = (props) => {
 
const donations = props.donations

  return (
    <div className="charity-donations">
            {
                donations.map((donation , i) => {
                return (    
                            <CharityDonationsItem
                                key={i}
                                amount={donation.amount}
                                currencyCode={donation.currencyCode}
                                donationDate={donation.donationDate}
                                donorDisplayName={donation.donorDisplayName}
                                imageUrl={donation.imageUrl}
                                message={donation.message}
                            />
                    )
                })
            }
    </div>
  )
}
  



export default CharityDonations;