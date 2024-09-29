import Health1 from "../asseet/Health1.png"
import Health2 from "../asseet/Health2.png"
import Button from "./Button"
import { Link } from "react-router-dom";

function MainSection() {

  return (
    <div>
      <div className=" text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-white-300 tracking-loose font-bold text-black">Protect Yourself</h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 text-black">
              Withy routine
            </h2>
            <p className="text-sm md:text-base  mb-4 text-black">
            Protect yourself by using condoms, getting tested regularly,// just keep going, one step at a time Your health and safety always come first!
            </p>
            <a
              href="#Start"
              className="bg-transparent hover:bg-green-300 text-green-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-300 hover:border-transparent"
              aria-label="Start TechFest Events"
            >
              <Link to='/Sinup'>
                <Button button="Start your journaling"/>
              </Link>
            </a>
          </div>

          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <div className="h-48 flex flex-wrap content-center gap-6">
              <img src={Health1} alt="redas"/>
              <img src={Health2} alt="redas"/>
              <img src={Health1} alt="redas"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection