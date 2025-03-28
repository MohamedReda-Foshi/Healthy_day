import React from 'react';
import Achievements from "../components/Achievements"

export default function User({ height = 'h-32', color = 'bg-gray-300' }) {
  return (
    <div>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

      <div className="profile-page">
        <div className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 2560 100">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <div className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        alt="Profile"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  </div>
                  <div>0 xp</div>
                </div>

              <div className='flex-row items-center  py-40 justify-around'>
                 <div className='font-bold text-green-500'>0 xp</div>
              
                <div className='py'>
                  <Achievements Titles="bronse" text="wad"/>    
                  <Achievements Titles Point="wad" text="wadas"/>    
                  <Achievements Titles Point="awd" text="awdas"/>    
                </div>
                <div className={`${height} ${color} w-px`} />
                <div>
                  <Achievements Titles Point="awd" text="awd"/>    
                  <Achievements Titles Point="awd" text=""/>    
                  <Achievements Titles Point="wad" text="awd"/>    
                </div>
                
              </div>
                
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
