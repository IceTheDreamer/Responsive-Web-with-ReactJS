import React from 'react'

function Contacts() {
  return (
    <div id='contacts'>
          <div id='column-one' className="columns">
            <h3>Connect Us: </h3>
            <p>renalie@liteclerk.com<br />#0945-380-5565 (Globe)<br />#0948-727-7776 (TNT)<br />Tel: (032) 265 6395</p>
            <div>
              <img src='images/facebook.png' alt='facebook' />
              <img src='images/twitter.png' alt='twitter' />
              <img src='images/instagram1.png' alt='instagram' />
            </div>
          </div>
          <div id='column-two' className="columns">
            <h3>Our Office:</h3>
            <p><span>Cebu</span><br />211 V.Rama Avenue Corner B.<br />Rodriguez St., Cebu City,<br />Philippines, 6000</p>
          </div>
          <div  id='column-three' className="columns">
            <img src='images/map.jpg' alt='map' />
          </div>
    </div>
  )
}

export default Contacts