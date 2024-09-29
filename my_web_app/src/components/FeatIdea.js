import React from 'react'



function FeatIdea(props) {
  return (
    
        
      <div className="">
          <div className="  md:7/12    border-collapse">
            <h1 className="text-2xl font-bold text-green-400 py-4 uppercase">
              {props.title}
            </h1>
            <p className="mb-1 dark:text-black line-clamp-3">
              {props.info}
            </p>
            <div>
          
            </div>
          
        </div>
      
    </div>

    
  )
}

export default FeatIdea