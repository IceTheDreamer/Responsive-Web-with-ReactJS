import React from 'react'
import {Link} from 'react-scroll';
import { Slide } from 'react-awesome-reveal';

function InfoOne() {
  return (
    <div id='infoone'>
        <Slide direction='right'>
        <div className='content'>
            <div className='column-one'>
                <img className='img-header' src='images/6.jpg' alt='image' />
                <img className='img-header' src='images/liteclerklogo.png' alt='logo' />
                <h3>Point-of-sale (POS) System with<br />optional cloud computing</h3>
                <div className='icons'>
                    <img src='icons/11.png' alt='icon1'/>
                    <img src='icons/12.png' alt='icon2'/>
                    <img src='icons/13.png' alt='icon3'/>
                    <img src='icons/14.png' alt='icon4'/>
                </div>
                <Link to='infoonemore' className='btn'>More Info</Link>
            </div>
            <div className='line'></div>
            <div className='column-two'>
                <div className='sector'>
                    <h4><img src='icons/11.png' alt='icon1' />
                    Design to run your retail business smoothly</h4>
                    <p>One of the main functions of Liteclerk POS is to record transactions that
                    your store made. Recording sales transactions quickly in your system is very
                    important when waiting lines are growing, so having a software that allows
                    scanning and selling products without wasting time is beneficial for 
                    a retail business.</p>
                </div>
                <div className="sector">
                    <h4><img src='icons/12.png' alt='icon1' />
                    Track your sales and inventory with ease</h4>
                    <p>Liteclerk POS with Cloud allow you to transfer inventory between stores. This makes it 
                        easy to consult the products that have been transferred, the description and the reason 
                        for the transfer. This feature allows you to offer better customer service and to avoid 
                        missing sales in case of lack of inventory.</p>
                </div>
                <div className="sector">
                    <h4><img src='icons/13.png' alt='icon1' />
                    Fully integrated cloud accounting for remote management</h4>
                    <p>You can use Liteclerk Cloud from any device with an internet connection. Liteclerk Cloud
                        keeps small business owners connected to their data from their branches. The Liteclerk
                        Cloud can integrate with Liteclerk POS without the need of a programmer. It’s scalable,
                        cost effective and easy to use.</p>
                </div>
                <div className="sector">
                    <h4><img src='icons/14.png' alt='icon1' />
                    Manage your expenses anywhere</h4>
                    <p>Managing your employees' daily expenses has never been easier. Whether it's travel expenses,
                        office supplies, or any other employee expenditure, access all receipts and expense 
                        submissions from your Expenses dashboard and create, validate, or refuse them in just a 
                        click. No need to download a specialized software to maintain expense records - everything
                        can be done directly through Liteclerk Cloud.</p>
                </div>
            </div>
        </div>
        </Slide>
    </div>
  )
}

export default InfoOne