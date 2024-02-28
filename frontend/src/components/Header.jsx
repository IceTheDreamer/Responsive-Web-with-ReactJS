import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { Zoom, Slide } from 'react-awesome-reveal';

function Header() {
  const [count, setCount] = useState(0)
  var timer;
  useEffect(()=>{
    timer= setInterval(()=>{
      setCount(count + 1);
      if(count === 2){
        setCount(0);
      }
    }, 2090)
    return () => clearInterval(timer);
  })
  const wordArray =['Retail Business', 'Accounting', 'Manufacturing and Logistics'];
  const changingClass = ['retail', 'account', 'manufact'];
  return (
    <div id='main'>
        <img className='img-bg'/>
        <img className='img-bg-text' src='changingImages/none.png'/>
        <Navbar />
        <div className='coverdarker'></div>
        <div className='name'>
            <h1 className={changingClass[count]}><span>{wordArray[count]}</span></h1>
            <p className='details'>Lite solutions for your business</p>
      </div>
    </div>
  )
}

export default Header