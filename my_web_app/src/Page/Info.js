import React from 'react'
import Slider from '../components/Slider';
import Text1 from '../components/Text2';
import Text2 from '../components/Text1';
import Infopage from '../components/Infopage';


function Info() {
  return (
    <div className='flex-col py-9 px-4'>
    
          <div className='pb-5'>
            <h3 className='text-4xl font-bold'>Main title</h3>
          </div>
        <div slider ><Slider/></div>

        <div className="grid grid-cols-5 gap-4 py-3"> {/* Add gap for spacing */}

      <div className="col-span-3">
        <div>
          <Text1 />
        </div>
        <div>
          <Text2 />
        </div>
      </div>
      <div className="col-span-2 flex flex-col "> {/* Use flex-col for vertical stacking */}
        <Infopage />
        <Infopage />
        
      </div>
    </div>
      
        

    </div>
  )
}

export default Info