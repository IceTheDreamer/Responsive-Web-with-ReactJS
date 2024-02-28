import React from 'react'
import { Slide } from 'react-awesome-reveal';

function Aboutus() {
  return (
    <div id='aboutus'>
        <div className="image-left"><img src='images/cloud.png' alt='cloud-image'/></div>
        <div className='about-text'>
          <img src='images/liteclerklogo.png' alt='logo' />
          <p className='banner'><span>Lite</span> solutions for your business</p>
          <h4>Retail Business - Accounting - Manufacturing and Logistics</h4>
          <Slide direction='down'><p><span className='bolder'>Liteclerk Corporation</span> is committed to give you high technology software that is lite
          to use but solves all your business problems instantly.<br /><br />With more than 10 years of experience in the
          industry, we understand all customer's retail business and accounting problems and solves them
          instantly by providing high availability point-of-sale (POS) systems with fully-integrated optional
          cloud accounting that enables remote management.<br /><br />On ERP, we are recommending Syspro. Syspro is one
          of the prefered ERP solutions for multinational companies that wants full view of all business
          activities, including financial, warehouse and inventory management, across their supply change and
          business operations.<br /><br />To achieve all these, we partnered with:</p></Slide>
          {/*<button>Read More</button>*/}
          <div className='images'>
            <img src='images/2.png' alt='microsoft' />
            <img src='images/3.png' alt='microsoft' />
            <img src='images/4.png' alt='microsoft' />
            <img src='images/5.png' alt='microsoft' />
          </div>
        </div>
    </div>
  )
}

export default Aboutus