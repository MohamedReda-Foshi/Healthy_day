import React from 'react'
import Button from './Button'

function Card(props) {
  return (
    <div>
          <div>
      <div className="max-w-2xl mx-auto py-2">
        <div className="bg-white flex-row shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="redas"
          />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button button="click to now more" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card