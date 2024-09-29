import React from 'react'

function Achievements(props) {
  return (
    <div className='flex-row flex items-center'>
        <div>imge Achievements  </div>
        <div className='px-8'> 
            <div className='text-lg font-bold'>{props.Titles}</div>
            <div>{props.Point}</div>
            <div>{props.text}</div>
        </div>
    </div>
  )
}

export default Achievements