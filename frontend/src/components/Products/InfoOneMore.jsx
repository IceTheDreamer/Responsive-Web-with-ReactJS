import React from 'react'
import {Zoom} from 'react-awesome-reveal'

function InfoOneMore() {
  return (
    <div id='infoonemore'>
      <Zoom>
        <div className="content">
          <h1>MAKE EVERYTHING LITE</h1>
          <h2>Expand your business with</h2>
          <div className="content-info">
            <div className='column-one'>
              <img src='images/monitor.png' alt='monitor'/>
            </div>
            <div className="column-two">
              <img src='images/liteclerklogo.png' alt='liteclerk-logo' />
              <h3>Point-of-sale (POS) System with optional Cloud Accounting</h3>
              <p>It is designed to be lite and simplified to make users easily adapt and understand 
                the flow of operations yet powerful enough to gather vital information for making business 
                decisions.<br /><br />By using POS, you can check your inventory in real-time and any given period. 
                Sales and Collection Summaries can be generated instantly and accurately. With these reports 
                you will be able to control the operations of your business, minimize inventory pilferage, 
                and monitor you cash.</p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  )
}

export default InfoOneMore