import React from 'react'
import {Link} from 'react-scroll';
import { Slide } from 'react-awesome-reveal';

function InfoTwo() {
  return (
    <div id='infotwo'>
        <Slide direction='left'>
        <div className='content'>
            <div className='column-one'>
                <div className='sector'>
                    <h4>Optimize supply chain management
                    <img src='icons/21.png' alt='icon1' />
                    </h4>
                    <p>With SYSPRO you can control and streamline inventory with tools to improve
                         forecasting & planning to match supply with customer demand.</p>
                </div>
                <div className="sector">
                    <h4>Streamline warehouse and logistics operations
                    <img src='icons/22.png' alt='icon1' /></h4>
                    <p>Automate the management of warehouse operations such as physical and cycle counts, 
                        picking, put away, replenishment and shipping, data collection and more.</p>
                </div>
                <div className="sector">
                    <h4>Highly flexible and customizable ERP
                    <img src='icons/23.png' alt='icon1' /></h4>
                    <p>Designed to be modular, SYSPRO saves you time and money by deploying just what you need 
                        upfront, and then adding functionality as you grow. In addition to that, it is also 
                        easily customizable to fit your operations.</p>
                </div>
                <div className="sector">
                    <h4>Actionable insights
                    <img src='icons/24.png' alt='icon1' /></h4>
                    <p>Empower your decision-making with critical insights and real-time trends for quicker 
                        analysis and execution. With this feature, you can meet your goals, targets, and 
                        deadlines on time because everyone has visibility to your business’ performance, 
                        which can also guide you in planning for your next step.</p>
                </div>
                <div className="sector">
                    <h4>User-based experience
                    <img src='icons/25.png' alt='icon1' /></h4>
                    <p>SYSPRO is relevant to, and adapts to all users within your organization. It enables 
                        you to simplify and customize the system to meet your individual role and needs. 
                        What’s more, you can pull-up the information that you require, that’s relevant to your 
                        role, whenever you need it.</p>
                </div>
                <div className="sector">
                    <h4>Robust security
                    <img src='icons/26.png' alt='icon1' /></h4>
                    <p>SYSPRO offers top-of-the-line security features and multidimensional protection levels
                         to ensure that your system is safe against malicious attempts to steal or exploit 
                         your sensitive business data.</p>
                </div>
            </div>
            <div className='line'></div>
            <div className='column-two'>
                <img className='img-header' src='images/7.jpg' alt='image' />
                <img className='img-header' src='images/8.png' alt='logo' />
                <h3>Enterprise Resource Planning (ERP) System</h3>
                <div className='icons'>
                    <img src='icons/21.png' alt='icon1'/>
                    <img src='icons/22.png' alt='icon2'/>
                    <img src='icons/23.png' alt='icon3'/>
                    <img src='icons/24.png' alt='icon4'/>
                    <img src='icons/25.png' alt='icon5'/>
                    <img src='icons/26.png' alt='icon6'/>
                </div>
                <Link to='infotwomore' className='btn'>More Info</Link>
            </div>
        </div>
        </Slide>
    </div>
  )
}

export default InfoTwo