import React from 'react';
import styled from "styled-components";
import CustomersSlide from "./customers/CustomersSlide";

function Customers() {
  const img = [
    'customerImages/8.jpg',
    'customerImages/9.jpg',
    'customerImages/10.jpg',
    'customerImages/11.jpg',
    'customerImages/1201.jpg',
    'customerImages/1301.jpg',
    'customerImages/1401.jpg',
    'customerImages/1502.jpg',
    'customerImages/16.jpg',
    'customerImages/17.jpg',
    'customerImages/18.jpg'
  ]
  return (
    <div id='customers'>
      <Container>
        <LightColor>
          <CustomersSlide />
        </LightColor>
      </Container>
      <div className='pictures'>
        <div className="1st-col">
          <img src={img[0]} alt='img' />
          <img src={img[4]} alt='img' />
          <img src={img[8]} alt='img' />
        </div>
        <div className="2nd-col">
          <img src={img[1]} alt='img' />
          <img src={img[2]} alt='img' />
        </div>
        <div className="3rd-col">
          <img src={img[10]} alt='img' />
          <img src={img[6]} alt='img' />
          <img src={img[7]} alt='img' />
        </div>
        <div className="4th-col">
          <img src={img[5]} alt='img' />
          <img src={img[3]} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Customers;

const Container = styled.div``;

const LightColor = styled.div`
    box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.336);
    margin-top: 150px;
`;