import React from 'react';
import {Link} from 'react-scroll';

function Box(props) {
  return (
    <div className='p-box'>
        <div className='p-b-img'>
            <img src={props.image} alt={props.alte} />
        </div>
        <div className='p-b-text'>
            <img src={props.logo} alt={props.alte} />
            <h1>{props.title}</h1>
            <div className='images'>
              <img src={props.img1}/>
              <img src={props.img2}/>
              <img src={props.img3}/>
              <img src={props.img4}/>
            </div>
            <Link to={props.lnk} className='cv-btn'>{props.button}</Link>
        </div>
    </div>
  )
}

export default Box;