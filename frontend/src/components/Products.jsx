import React from 'react';
import Box from './Box';
import { Zoom, Slide } from 'react-awesome-reveal';

function Products() {
  return (
    <div id='products'>
      <div className='content'>
        <div className='p-heading'>
              <h1>OUR <span>PRODUCTS</span></h1>
              <p>Choose the right provider, choose <span>Liteclerk</span></p>
          </div>
          <div className='b-container'>
            <Slide direction='left'>
              <Box image='images/6.jpg' alte='image1' button='Read More' logo='images/9.png' title='Point-of-sale (POS) System with optional cloud accounting.' img1='icons/11.png' img2='icons/12.png' img3='icons/13.png' img4='icons/14.png' lnk='infoone'/>
            </Slide>
            <Slide direction='right'>
              <Box image='images/7.jpg' alte='image2' button='Read More' logo='images/8.png' title='Enterprise Resource Planning (ERP) System' img1='icons/21.png' img2='icons/22.png' img3='icons/23.png' img4='icons/24.png' lnk='infotwo'/>
            </Slide>
              </div>
      </div>
    </div>
  )
}

export default Products;