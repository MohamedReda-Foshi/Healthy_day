import Features from "../components/Features";
import Infopage from "../components/Infopage";
import MainSection from "../components/MainSection";



export default function Home() {
  return (
    <div>
      <div className="flex-col">
        <div>
          <MainSection />
        </div>        
        <div className="flex-col md:flex-row md:flex  justify-between px-11  h-lvh py-1">
            <Features />          
          </div>
          <div className="flex-row gap-3 px-5">
          
            <Infopage Title="Whay you need to drink water" imgae info />
            <Infopage Title="Whay you have to do sport all time  " />
            <Infopage Title="what do you have to change your underwear"/>
            <Infopage Title="Whay you need to drink water"/>
          </div>
        </div>
      </div>
    
  );
}
