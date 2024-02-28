import React from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import {Slide} from 'react-awesome-reveal';

const CustomersSlide = () => {
  return (
    <Container id='customer'>
        <Zoom>
            <h1>JOIN OUR EVER GROWING CUSTOMERS</h1>
        </Zoom>
        <Slide direction='down'>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default CustomersSlide;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 2.5rem;
        font-family: 'Kanit',Arial Narrow Bold,sans-serif;
        color: #0090b5;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`
