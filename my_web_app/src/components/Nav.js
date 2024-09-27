import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

function Nav({ toggleDarkMode, darkMode }) {
  const [Open, setOpen] = useState(false);
  const [message, setMessage] = useState(
    <GiHamburgerMenu
      className="text-white bg-black dark:bg-white dark:text-black" size={30}/>)

 const today = new Date();
 const year = today.getFullYear();  
 const handClickPc=()=>
   {
     // setMessage("Second")
     // if(message === "Second") {
       // setMessage(<GiHamburgerMenu />)
     // }

     if(Open) {
       setMessage(<GiHamburgerMenu className="text-white dark:bg-white dark:text-black" size={30} />)
     } else {
       setMessage(<IoMdClose size={30} className="text-white dark:bg-white dark:text-black" />)

     }
     setOpen(!Open)
   };
   
















 

  return (
    <div>
      {/*mobiel menu*/}
      <div className="md:hidden">
        <div className="w-lvw fixed z-30 bg-stone-100 dark:bg-black flex justify-between  items-center shadow-sm   ">
          <div>
            <button onClick={handClickPc} className="py-3">
              {message}
            </button>

            <div>
              {Open && (
                <div>
                  <RxHamburgerMenu />
                </div>
              )}
            </div>
          </div>

          <div className=" px-3">
            <button
              className=" text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun size={30} /> : <MdDarkMode size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/*desktop menu*/}

      <div>
        <div className="hidden md:block ">
          <div className=" flex flex-col  items-center   ">
            {
              //fixed is the think thay the problam of the nav bar find anthor way to fix it with out use fixed}
            }

            <div className="space-y-4 fixed h-lvh w-auto bg-stone-100  py-56 px-11 dark:bg-black dark:text-white">
              <div>
                <h1 className="text-4xl  font-bold text-wrap uppercase font-bolds">
                  Main
                </h1>
              </div>

              <div>
                <ul className="flex flex-col justify-items-center space-y-3 ">
                  <li>
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      Topic
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Experiences"
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      Progress
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Research"
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      User
                    </Link>
                  </li>


                </ul>
              </div>

              <div className=" py-40">
                <button
                  className="px-1 text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <FaSun size={30} /> : <MdDarkMode size={30} />}
                </button>

                <p className="font-light">
                  <p>
                    <p>Copywrite © {year} </p>
                  </p>
                  <p>Created by Mohamed Reda Foshi</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
