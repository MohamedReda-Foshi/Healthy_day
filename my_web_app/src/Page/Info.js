import React from 'react'
import Slider from '../components/Slider';
import Text1 from '../components/Text2';
import Text2 from '../components/Text1';


function Info() {
  return (
    <div className='flex-col '>
        <div slider ><Slider/></div>
        <div text2 ><Text1/></div>
        <div text2 ><Text2/></div>
        

    </div>
  )
}

export default Info