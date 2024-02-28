import React from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter';

function Typed() {
  return (
    <h1><Typewriter words={['Retail Business', 'Accounting', 'Manufacturing and Logistics']} loop={3000}
    />|</h1>
  );
}

export default Typed