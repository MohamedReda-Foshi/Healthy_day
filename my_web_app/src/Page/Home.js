import Features from "../components/Features";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <MainSection />
        </div>
        <div className="flex-col md:flex-row md:flex  justify-between px-11 z-30 h-lvh py-1">
          <div className="  ">
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
}
