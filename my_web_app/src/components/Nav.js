
import { Link } from "react-router-dom";


import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

function Nav({ toggleDarkMode, darkMode }) {
 



  return (
    <div>
  
      <div className="">
        <div className="w-lvw fixed z-30 bg-stone-100  dark:bg-black flex justify-around  items-center shadow-sm   ">
          <ul className="gap-14 flex-row py-3 ">
            <li>
              <Link
                to="/Home"
                spy={true}
                smooth={true}
                className="dark:text-white relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px]  after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Info"
                spy={true}
                smooth={true}
                className="dark:text-white relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Info
              </Link>
            </li>
            <li>
              <Link
                to="/User"
                spy={true}
                smooth={true}
                className="dark:text-white relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                User
              </Link>
            </li>

           

            <li className="">
              <div className=" px-3 gap-11">
                <button
                  className=" text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <FaSun size={30} /> : <MdDarkMode size={30} />}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/*desktop menu*/}

      {/*

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
                      to="/Topic"
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      Topic
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Progress"
                      spy={true}
                      smooth={true}
                      className="relative cursor-pointer text-xl w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      Progress
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/User"
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
    */}
    </div>
  );
}

export default Nav;
