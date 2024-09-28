import React from 'react'
import Calender from "./Calender"
import Task from "./Task"

function CalenderPage() {
  return (
    <div className='flex-row'>



        <div>
          <Task/>
        </div>


        <div className='border-4 p-9 bg-blue-700 flex-col	 rounded-3xl 		'>


                <div className='flex-row justify-around py-2 items-center' >         
                    <div className='text-center py-3	'>
                            <p className='text-4xl'> 22 day</p>
                            <p>Streak</p>
                    </div>
                    <div className='text-center py-3'>
                        <p className='text-4xl'>6 day</p>
                        <p>Since last period</p>
                    </div>
               </div>         


            <div>
                <Calender/>
            </div>

        </div>








    </div>
  )
}

export default CalenderPage